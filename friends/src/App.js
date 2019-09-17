import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendList';
import FormikAddFriend from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

          <Route path ='/login' component={Login} />
          <PrivateRoute path='/protected' component={FriendList} />
          <PrivateRoute path='/add' component={FormikAddFriend} />

      </div>
    </Router>
  );
}

export default App;
