import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
//pages
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import UserRepositories from './pages/UserRepositories'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/:id" component={UserPage} />
      <Route path="/:id/repositories" component={UserRepositories} />
    </Switch>
  );
}

export default App;
