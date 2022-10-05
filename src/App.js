import './App.css';
import React, { useEffect, useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button , Nav, Container, Navbar, Row, Col, Carousel} from 'react-bootstrap';
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Personal from './Pages/Personal';
import Loading from './components/Loading';
import { AnimatePresence, motion } from 'framer-motion';



function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  })

  // const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Router>
        <Routes>
          <Route path='/' element={
            isLoading==true?
              <Loading/> :
              <Home/>
          } />
          <Route path='/personal' element={
            isLoading==true?
            <Loading/> :
            <Personal/>
          } />
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
