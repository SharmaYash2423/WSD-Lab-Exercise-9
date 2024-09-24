import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import ImageFetcher from './ImageFetcher';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/imagefetcher" element={<ImageFetcher />} />
      </Routes>
    </Router>
  );
};

export default App;
