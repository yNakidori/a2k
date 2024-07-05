import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import MainPage from './pages/mainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  )
}

export default App;