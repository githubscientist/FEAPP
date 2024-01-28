import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useUserFetch from '../../hooks/useUserFetch';

function Dashboard() {

  const dispatch = useDispatch();
  
  useUserFetch(dispatch);

  const users = useSelector(state => state.user.users.users);

  console.log(users);

  useEffect(() => {
    // if the user is not logged in, redirect to login
    if (!localStorage.getItem('user')) {
      // redirect to login
      history.push('/login');
    }
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {
          users.map(user =>
            <li key={user.id}>{user.name} <br /> { user.places.length} places </li>
          )
        }
      </ul>
    </div>
  )
}

export default Dashboard;