import React, { useState, useEffect } from 'react';

function ScrapedProperties() {
  const [scrapedData, setScrapedData] = useState([]);
  const [propertyId, setPropertyId] = useState('');
  const [properties, setProperties] = useState([]);

  const handleFetchScrapedData = () => {
    // Trigger fetching scraped data when the button is clicked
    setScrapedData([]);
    // You can set the propertyId based on user selection, but the initial value should be set here
    setPropertyId(properties[0]._id); // Example: setting it to the first property's ID
  };


  useEffect(() => {
    // Fetch the properties for the currently logged-in user
    fetch('http://localhost:3000/properties/allPropertiesByUser', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProperties(data); // Set user properties
        if (data && data.length > 0) {
          setPropertyId(data[0]._id);
        }
      })
      .catch((error) => {
        console.error('Failed to fetch user properties:', error);
      });
  }, []);

  useEffect(() => {
    if (propertyId) {
      fetch(`http://localhost:3000/scrapedData/allScrapedData/${propertyId}`)
        .then((response) => response.json())
        .then((data) => {
          setScrapedData(data.scrapedProperties);
        })
        .catch((error) => {
          console.error('Failed to fetch scraped properties:', error);
        });
    }
  }, [propertyId]);

  return (
    <div>
      <h2>Scraped Properties</h2>
      <div>
        <select value={propertyId} onChange={(e) => setPropertyId(e.target.value)}>
          {properties.map((property) => (
            <option key={property._id} value={property._id}>
              {property.email}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={handleFetchScrapedData}>Fetch Scraped Data</button>
      </div>
      <ul>
        {scrapedData.map((scrapedProperty, index) => (
          <li key={index}>
            <strong>Account Type:</strong> {scrapedProperty.accountType}<br />
            <strong>User Name:</strong> {scrapedProperty.userName}<br />
            <strong>Account URL:</strong> {scrapedProperty.accountUrl}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScrapedProperties;
