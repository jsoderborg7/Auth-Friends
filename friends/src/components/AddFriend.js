import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class AddFriend extends React.Component {
  state ={
    friend: {
      id: '',
      name: '',
      age: '',
      email: ''
    }
  };

  handleChange = e =>{
    this.setState({
      friend:{
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  addFriend = e =>{
    e.preventDefault();
    axiosWithAuth()
      .post('/friends', this.state.friend)
      .then(res =>{
        localStorage.setItem('friend', res.data.payload);
        console.log('add friend',res.data)
      })
      .catch(err => console.log(err));
  };

  render(){
    return(
      <div>
        <form onSubmit={this.addFriend}>
          <input
            type="text"
            name='name'
            value={this.state.friend.name}
            onChange={this.handleChange}
            placeholder='Name'
          />
          <input
            type="text"
            name='age'
            value={this.state.friend.age}
            onChange={this.handleChange}
            placeholder='Age'
          />
          <input
            type="email"
            name='email'
            value={this.state.friend.email}
            onChange={this.handleChange}
            placeholder='Email'
          />
          <button>Add Friend</button>
        </form>
      </div>
    )
  }
}

export default AddFriend;