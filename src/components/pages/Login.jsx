import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../utils/authContext';
import { useHistory } from 'react-router-dom';

function Login() {

  const history = useHistory();

  useEffect(() => {
    // if the user is already logged in, redirect to dashboard
    if (localStorage.getItem('user')) {
      history.push('/dashboard');
    }
  }, []);

  
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = login(userData);

    if (user) {
      setUserData({
        email: '',
        password: ''
      });

      console.log('user logged in');

      // Redirect to dashboard
      history.push('/dashboard');
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input 
            type='email'
            name='email'
            placeholder='Email'
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
        </div>

        <div>
          <input 
            type='password'
            name='password'
            placeholder='Password'
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
        </div>

        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  )
}

export default Login;