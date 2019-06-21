import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
//pages
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/:id" component={UserPage} />
    </Switch>
  );
}

export default App;
