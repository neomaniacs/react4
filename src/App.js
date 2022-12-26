import React from 'react';
import { useState } from 'react';
import AppUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]) ;

  const AddUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id:Math.random().toString()}] ;
    }) ;
  }

  return (
    <div>
      <AppUser onAddUser={AddUserHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
