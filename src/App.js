import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home'
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<ContactForm/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
