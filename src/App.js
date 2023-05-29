import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../src/components/auth/LoginPage';
import LandingPage from '../src/components/LandingPage';
import LocalPage from './components/LocalPage';
import TouristPage from './components/TouristPage';
import SignUpPage from './components/auth/SignUpPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home/*" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home/local" element={<LocalPage />} />
          <Route path="/home/tourist" element={<TouristPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
