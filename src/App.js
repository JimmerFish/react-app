import  {React, useState} from 'react';
import './App.css';
import Home from './pages'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MintPage from './pages/mint';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <Router>
      <Navbar toggle = {toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/mint" element={<MintPage/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
