import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

function App() {
  const [likeColor, setLikeColor] = useState('');
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [randomUser, setRandomUser] = useState({});
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))


    //singleUser
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data => setSingleUser(data))


    //randomUser
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setRandomUser(data.results[0]))
  },[])
  return (
    <div>
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThumbUpAltIcon onClick ={() => setLikeColor(likeColor ? '' : 'primary')} color = {likeColor}></ThumbUpAltIcon>
      <h1>Random firstname: {randomUser.name && randomUser.name.first}</h1>
      <h1>lastname: {randomUser.name?.last}</h1>
      <h2>Email: {randomUser.email}</h2>
      <h2>Gender: {randomUser.gender}</h2>
      <h3>User List:</h3>
      {
        users.map(user => <li>{user.name}</li>)
      }
      <p>Single User Name: {singleUser.name}</p>
    </div>
  );
}

export default App;
