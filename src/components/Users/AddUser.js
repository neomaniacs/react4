import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styled from './AddUser.module.css' ;

const AppUser = (props) => {

  const [enteredUserName, setEnteredUserName] = useState('') ;
  const [enteredAge, setEnteredAge] = useState('') ;

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value) ;
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value) ;
  }

  const AddUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
      return ;
    }
    if(+enteredAge < 1) {
      return ;
    }
    setEnteredAge('') ;
    setEnteredUserName('') ;
    props.onAddUser(enteredUserName, enteredAge) ;
  };


  return (
    <Card className={styled.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={userNameChangeHandler} value={enteredUserName}/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AppUser;
