import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/protected'>Friends</Link></li>
        </ul>
        <Switch>
          <Route path ='/login' component={Login} />
          <Route component={Login} />
          <PrivateRoute exact path='/protected' component={FriendList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
