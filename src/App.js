import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Profile from './pages/Profile';
import React from 'react';
import Presentation from './pages/Presentation';
import Navbar from './components/Navbar';


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Presentation />} />
        <Route path='/contact-us'  element={<Contact />} />
        <Route path='/about-me'  element={<AboutMe />} />
        <Route path='/profile/:name'  element={<Profile />} />
      </Routes>
    </Router>
    /*
    <div className="App">
      <Navbar />

      <header className="App-header">
        
      </header>
      <section className='App-body'>

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/presentation">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/about-me">About Me</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/profile/:name" element={<Profile />} />
        </Routes>
      </Router>
      </section>

      
      
    </div>*/
  );
}

export default App;
