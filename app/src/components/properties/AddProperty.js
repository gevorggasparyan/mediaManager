import React, { useState } from 'react';

const AddProperty = () => {
  const [propertyData, setPropertyData] = useState({
    email: '',
    password: '',
    accountType: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setPropertyData({ ...propertyData, [name]: value });
  };

  const handleAddProperty = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('authToken');

      const response = await fetch('http://localhost:3000/properties/addProperty', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(propertyData),
      });

      if (response.status === 401) {
        const result = await response.json();
        console.log('Response:', result);
        alert(result.error);
      } else if (response.ok) {
        const result = await response.json();
        console.log('Property added:', result);
        alert('Property Added. We are scraping data...');
      } else {
        console.error('Failed to add property:', response.status);
      }
    } catch (error) {
      console.error('Failed to add property:', error);
    }
  };

  return (
    <div>
      <h2>Add Property</h2>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={propertyData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={propertyData.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Account Type:</label>
          <input
            type="text"
            name="accountType"
            value={propertyData.accountType}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button className='button' onClick={handleAddProperty}>Add Property</button>
        </div>
      </form>
    </div>
  );
}

export default AddProperty;
