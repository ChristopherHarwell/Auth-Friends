import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
