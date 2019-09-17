import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <button><Link to='/login'>Login</Link></button>
        <button><Link to='/protected'>Friend List</Link></button>

        <Route path ='/login' component={Login} />
        <PrivateRoute exact path='/protected' component={FriendList} />
      </div>
    </Router>
  );
}

export default App;
