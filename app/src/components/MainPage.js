import React from 'react';
import Login from './Auth/Login';
import Register from './Auth/Registration';

const MainPage = () => {
  return (
    <div>
      <h2>Media Manager</h2>
      <Login /> {}
      <Register /> {}
    </div>
  );
}

export default MainPage;
