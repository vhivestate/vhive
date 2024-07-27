import './App.css';
import React from 'react'

import Landing from './pages/Landing';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import About from './pages/About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
