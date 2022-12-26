import React from 'react';
import { useState } from 'react';
import AppUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]) ;

  const AddUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      const updateUsersList = [...prevUsersList] ;
      updateUsersList.unshift({name: uName, age: uAge, id:'user'+usersList.length}) ;
      return updateUsersList ;
    }) ;
  }

const deleteItemHandler = (userId) => {
  setUsersList((prevUsersList) => {
    const updateUsersList = prevUsersList.filter((user) => user.id !== userId) ;
    return updateUsersList ;
  }) ;
}

  return (
    <div>
      <AppUser onAddUser={AddUserHandler} />
      <UsersList users={usersList} onDeleteItem={deleteItemHandler} />
    </div>
  );
}

export default App;
