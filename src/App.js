import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import './App.css';

import MainPage from './pages/MainPage';
import Dashboard from './pages/Dashboard';

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
    )
}

export default App;