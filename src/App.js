import './App.css';
import React, { useEffect, useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button , Nav, Container, Navbar, Row, Col, Carousel} from 'react-bootstrap';
import AOS from 'aos';
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';
import Home from './Pages/Home';
import Personal from './Pages/Personal';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/personal' element={<Personal/>} />
      </Routes>
    </Router>
  );
}

export default App;
