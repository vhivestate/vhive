import './App.css';
import React from 'react'

import Landing from './pages/Landing';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Services from './pages/Services';

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
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
