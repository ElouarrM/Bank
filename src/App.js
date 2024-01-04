// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authenticate from './components/Authenticate';
import RegisterComponent from './components/RegisterComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authenticate />} />
        <Route path="/register" element={<RegisterComponent />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
