import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../src/components/auth/LoginPage';
import LandingPage from './components/landing/LandingPage';
import LocalPage from './components/local/LocalPage';
import TouristPage from './components/tourist/TouristPage';
import SignUpPage from './components/auth/SignUpPage';
import ChatPage from './components/chat/ChatPage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/home/*" element={<LandingPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/chat" element={<ChatPage />} />
                    <Route path="/local" element={<LocalPage />} />
                    <Route path="/tourist" element={<TouristPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
