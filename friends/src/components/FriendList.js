import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class FriendList extends React.Component{
  state={
    friends: []
  };

  componentDidMount() {
    this.getFriends()
  };

  getFriends = () =>{
    axiosWithAuth()
      .get('/friends')
      .then(res =>{
        console.log('friends', res.data)
        this.setState({
          friends: res.data
        });
      })
      .catch(err =>{
        console.log(err.response)
      });
  };

  render(){
    return(
      <div>
        {this.state.friends.map((friend, index) =>{
          return <h2 key={index}>{friend.name}</h2>
        })};
      </div>
    );
  };
};

export default FriendList;

