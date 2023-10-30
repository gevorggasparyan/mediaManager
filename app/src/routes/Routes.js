import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Registration from '../components/Auth/Registration';

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route path="/" element={<login />} />
    </Routes>
  );
};

export default Routers;
