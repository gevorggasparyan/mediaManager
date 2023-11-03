import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await axios.post('http://localhost:3000/user/registration', { username, password , email });
      if (response.status === 400) {
        const result = await response.json();
        console.log("Response: ",result);
        alert(result.error);
      }
      console.log(response);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
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
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className='button' onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default Registration;
