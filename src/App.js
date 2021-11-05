import React from 'react';
import './App.css';
import Home from './pages'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MintPage from './pages/mint';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/mint" element={<MintPage/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
