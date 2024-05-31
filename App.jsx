import React from 'react';
import './index.css'; // Ensure this file exists and has the correct path
import Home from './Home';
function App() {
  return (
    <><nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">AIRMAX</label>
      <ul>
        <li><a className="active" href="home">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="service">Services</a></li>
        <li><a href="contact">Contact</a></li>
        <li><a href="feedback">Feedback</a></li>
      </ul>
    </nav>
    <Home/>
    </>
    
  );
}

export default App;
