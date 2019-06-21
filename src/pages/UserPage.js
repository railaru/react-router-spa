import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function UserPage(props) {
  // Setting initial state
  const initialUserState = {
    user: {},
    loading: true
  };

  // Getter and setter for user state
  const [user, setUser] = useState(initialUserState);

  // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
  useEffect(() => {
    const getUser = async () => {
      // Pass our param (:id) to the API call
      const { data } = await axios(
        `https://api.github.com/users/${props.match.params.id}`
      );

      // Update state
      setUser(data);
    };

    // Invoke the async function
    getUser();
  }, []); // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop

  // Return a table with some data from the API.
  return user.loading ? (
    <div className="container">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
      <div className="container">

        <div className='centered-parent'>
          <div className='centered-child'>
            <img
              className="rounded-circle responsive-image mb-3 mt-3"
              src={user.avatar_url}
              style={{ width: '100px' }}
              alt=""
            />

            <h2>@{props.match.params.id}</h2>

            <Link to="/railaru/repositories">
              <button type="button" className="btn btn-primary">Repositories</button>
            </Link>
          </div>
        </div>

        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">
                <span role="img" aria-label="emoji">
                  🤠
              </span>
                Name
            </th>
              <th scope="col">
                <span role="img" aria-label="emoji">
                  ️🗺️
              </span>
                Location
            </th>
              <th scope="col">
                <span role="img" aria-label="emoji">
                  ️🌐
              </span>
                Website
            </th>
              <th scope="col">
                <span role="img" aria-label="emoji">
                  ️👥
              </span>
                Followers
            </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.location}</td>
              <td>
                <a href={user.blog}>{user.blog}</a>
              </td>
              <td>{user.followers}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}
