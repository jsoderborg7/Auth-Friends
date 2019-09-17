import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import FriendCard from './FriendCard';
import FormikAddFriend from './AddFriend';

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
        <div>
          {this.state.friends.map((friend) =>{
            return <FriendCard name={friend.name} age={friend.age} email={friend.email} key={friend.id} /> 
          })};
        </div>
          <FormikAddFriend />
      </div>
    );
  };
};

export default FriendList;

