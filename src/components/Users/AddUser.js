import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styled from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AppUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const AddUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "invalid input",
        message: "please enter a valid age (>0)",
      });
      return;
    }
    setEnteredAge("");
    setEnteredUserName("");
    props.onAddUser(enteredUserName, enteredAge);
  };

  const errorHandler = () => {
    setError(null) ;
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onError={errorHandler}/>}
      <Card className={styled.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={userNameChangeHandler}
            value={enteredUserName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AppUser;
