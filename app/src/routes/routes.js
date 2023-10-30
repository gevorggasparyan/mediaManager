import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../components/login';
import Registration from '../components/registration';

const Routes = () => {
  return (
    <>
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
    </>
  );
};

export default Routes;
