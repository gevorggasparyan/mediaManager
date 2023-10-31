import React from 'react';
import AddProperty from './properties/AddProperty';
import ScrapedProperties from './properties/ScrapedProperties';
import {useNavigate} from 'react-router-dom';

const PropertiesPage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      localStorage.removeItem('authToken');
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div>
        <button className='logout-button' onClick = {handleLogout}>Log Out</button>
      <AddProperty /> {}
      <ScrapedProperties /> {}
    </div>
  );
}

export default PropertiesPage;
