import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/login';
import Registration from '../components/registration';

const App = () => {
  return (
    <Routes>
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route path="/" element={<login />} />
    </Routes>
  );
};

export default App;
