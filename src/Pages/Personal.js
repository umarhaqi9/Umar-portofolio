import React, { useEffect, useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button , Nav, Container, Navbar, Row, Col, Carousel} from 'react-bootstrap';
import AOS from 'aos';
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';

import VanillaTilt from 'vanilla-tilt';
import "vanilla-tilt/dist/vanilla-tilt.min.js";
import basket from '../assets/basket.png';
import bola from '../assets/bola.png';
import audiophile from '../assets/audiophile.png';
import modding from '../assets/modding.png';

function Personal() {
    // AOS
    useEffect(() => {
        AOS.init({
          duration : 1000
        });
        AOS.refresh();
      }, []);
    
    //   Vanila TiltJS
    VanillaTilt.init(document.querySelectorAll(".hobby-card"), {
        max: 25,
        speed: 400, 
        glare: true,
        "max-glare": .5,
        scale: 1.2
	  });

    // DATA
    const dataHobby = {
        "Hobby" : [
            {
                "Name" : "Basket",
                "Image" : "./assets/basket.png"
            },
            {
                "Name" : "Bola",
                "Image" : "./assets/bola.png"
            },
            {
                "Name" : "Audiophile",
                "Image" : "./assets/audiophile.png"
            },
            {
                "Name" : "Mod",
                "Image" : "./assets/modding.png"
            }
        ]
    }

    return (
    <div>
        <Navbar className='fixed-top p-2' bg="black" variant='dark' expand="lg">
            <Container>
            <Navbar.Brand href="/#welcome">Umar Haqi</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse  id="basic-navbar-nav">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/#moreaboutme">About Me</Nav.Link>
                <Nav.Link href="/#projects">My Projects</Nav.Link>
                <Nav.Link href="/#contact">Contact</Nav.Link>
                <Nav.Link href="/personal">Personal Stuff</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>

        {/* Welcome Section */}
        <div  id='welcome' className='bg-black text-white text-center pt-5'>
          
          <img data-aos="zoom-in-up" className='profpic' src='https://cdn.discordapp.com/attachments/841587576464736266/896039768499032064/20211008_212135.jpg'/>
          <h1 data-aos="fade-up" data-aos-delay="500">Hi, I'm Umar!</h1>
          <p data-aos="fade-up" data-aos-delay="800" className="m-2">
            Welcome to my personal website. This site will provide informations
            about myself. 
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,128L34.3,154.7C68.6,181,137,235,206,213.3C274.3,192,343,96,411,85.3C480,75,549,149,617,170.7C685.7,192,754,160,823,160C891.4,160,960,192,1029,170.7C1097.1,149,1166,75,1234,53.3C1302.9,32,1371,64,1406,80L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        </div>

        <div id='hobbies' className='bg-white text-black jumbotron jumbotron pt-5'>
          <div data-aos="fade-up">
            <Container>
              <Row className='text-center'>
                <h1>HOBBIES</h1>
              </Row>
              <Row className="d-flex justify-content-center text-center">
                {dataHobby.Hobby.map ((hobby, i) => {
                    return(
                        <Col className="m-3" key={i} data-tilt data-tilt-max="50" data-tilt-speed="500">
                            <div id={hobby.Name} className="hobby-card ">
                                <img src={hobby.Image}/>
                            </div>
                        </Col>
                    )
                })}
                
                
              </Row>
            </Container>
          </div>
        </div>

    </div>
  )
}

export default Personal