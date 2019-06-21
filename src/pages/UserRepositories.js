import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserRepositories(props) {

    const initialRepositoryState = {
        repositories: {},
        loading: true
    };

    const [repositories, setRepositories] = useState(initialRepositoryState);

    useEffect(() => {
        const getRepositories = async () => {
            const { data } = await axios(
                "https://api.github.com/users/railaru/repos"
            );

            console.log(data);

            setRepositories(data);
        };

        getRepositories();
    }, []);


    return repositories.loading ? (
        <div className="container">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    ) : (
            <div className="container">

                <h2>Railaru's repositories</h2>

                <ul className="list-group list-group-flush mt-3">
                    {repositories.map(({ id, name, html_url }) => (
                        <li key={id} className="list-group-item">
                            {name}
                            <a href={html_url} target='_blank' rel='noopener noreferrer'>
                                <span className="badge badge-pill badge-success float-right">Repo link</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
}
