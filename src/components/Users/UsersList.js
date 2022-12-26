import React from "react";
import Card from "../UI/Card";
import styled from './UsersList.module.css' ;

const UsersList = (props) => {

const deleteHandler = (event) => {
  props.onDeleteItem(event.target.id) ;
} ;

  return (
    <Card className={styled.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id} id={user.id} onClick={deleteHandler}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
