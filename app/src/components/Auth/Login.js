import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/user/login', { username, password });
      const token = response.data.token;

      if (response.status === 403) {
        const result = await response.json();
        alert(result.error);
      }
      else if (response.status === 401) {

      }
      localStorage.setItem('authToken', token)
      navigate('/properties');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='button' onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
