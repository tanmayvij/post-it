import React from 'react';
import './Styles.css';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import User from './User'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function isLoggedIn() {
  if(localStorage.getItem("token")) return true;
  else return false;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          { isLoggedIn() ? <Redirect to={{pathname: "/dashboard"}} /> : <Login />}
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="*">
          <h1 style={{color: "#FFFFFF"}}>Error 404: The route doesn't exist.</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
