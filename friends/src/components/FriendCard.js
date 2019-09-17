import React from 'react';
import {Card} from 'semantic-ui-react'

const FriendCard = (props) =>{
  return(
    <Card>
    <Card.Header>{props.name}</Card.Header>
    <Card.Meta>{props.age}</Card.Meta>
    <Card.Description>{props.email}</Card.Description>
  </Card>
  )
}

export default FriendCard;