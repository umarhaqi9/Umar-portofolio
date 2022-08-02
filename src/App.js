import './App.css';
import React, { useEffect, useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button , Nav, Container, Navbar, Row, Col, Carousel} from 'react-bootstrap';
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
