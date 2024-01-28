import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../utils/authContext';
import { useHistory } from 'react-router-dom';

function Register() {

  const { register } = useAuth();
  const history = useHistory();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleRegister = (e) => {
    e.preventDefault();

    const user = register(userData);

    if (user) {
      setUserData({
        name: '',
        email: '',
        password: ''
      });

      console.log('user registered');

      // Redirect to login page
      history.push('/login');
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <input 
            type='name'
            name='name'
            placeholder='Name'
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </div>

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
          <button type='submit'>Register</button>
        </div>
      </form>

      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  )
}

export default Register;