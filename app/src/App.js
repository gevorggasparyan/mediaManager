import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Registration';
import MainPage from './components/MainPage';
// import AddProperty from './components/properties/AddProperty';
import PropertiesPage from './components/PropertiesPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/properties" element={<PropertiesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
