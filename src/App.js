import React from 'react';
import Login from './Login';
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
          <form></form>
        </Route>
        <Route path="/dashboard">
          <h1>Dashboard</h1>
        </Route>
        <Route path="*">
          <h1 style={{color: "#FFFFFF"}}>Error 404: The route doesn't exist.</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
