import './App.css';
import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,NavDropdown, Nav, Container, Navbar, Row, Col} from 'react-bootstrap';
import AOS from 'aos';
import "aos/dist/aos.css";


function App() {
  // Animate On Scroll Script start
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 250;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
    AOS.refresh();
  }, []);

  window.addEventListener("scroll", reveal);
  // Animate On Scroll Script end

  return (
    <div className='App'>
      <Navbar className='fixed-top p-2' bg="black" variant='dark' expand="lg">
        <Container>
          <Navbar.Brand href="#welcome">Umar Haqi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#moreaboutme">About Me</Nav.Link>
              <Nav.Link href="#projects">My Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
        {/* Welcome Section */}
        <div  id='welcome' className='bg-black text-white text-center p-5 '>
          
          <img data-aos="zoom-in-up" className='profpic' src='https://cdn.discordapp.com/attachments/841587576464736266/896039768499032064/20211008_212135.jpg'/>
          <h1 data-aos="fade-up" data-aos-delay="500">Hi, I'm Umar!</h1>
          <p data-aos="fade-up" data-aos-delay="800">
            Welcome to my personal website. This site will provide informations
            about myself. 
          </p>
        </div>
        <div  className='bg-white text-center'>
          <a href='#moreaboutme'>
            <button data-aos="fade-up" data-aos-delay="1000" className='scrollBtn text-center'>Scroll Down!</button>
          </a>
        </div>

        {/* About Me Section */}
        <div id='moreaboutme' className='bg-white text-black jumbotron jumbotron p-5 mt-5'>
          <div data-aos="fade-up">
            <Container>
              <Row className='text-center'>
                <Col>
                  <div data-aos="fade-up" class="a-box">
                    <div class="img-container">
                      <div class="img-inner">
                        <img className='text-center mr-2' src="https://cdn.discordapp.com/attachments/989301099422949466/989309224943235072/pp-removebg-preview.png"/>
                      </div>
                    </div>
                    <div  class="text-container">
                      <h3>Umar Haqi</h3>
                      <div>
                        <p>Front-End Developer</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col data-aos="fade-up" data-aos-delay="800" className='mt-4 col-md-6'>
                  <h1 className='text-center text-uppercase m-2'>About Me</h1>
                  <p className='text-justify m-4'>
                    I'm a front-end developer. My very big interests are in HTML, CSS, reactJS, and Ionic React. 
                    I have been constantly trying my best to develop my front-end engineering skills for the past 2 years. I'm a very open guy to making new friends.
                    I am a very "try hard" person to achive the best outcome with the best of my abilites. It's not always perfect, but I will always make sure to give
                    the best I can to finish a project. 
                  </p>
                    <a href='https://cdn.discordapp.com/attachments/989301099422949466/1001006420814200862/Umar_Haqi_CV.pdf' target="_blank" download>
                      <button className='personal-button'>CV</button>
                    </a>
                    <a href='https://cdn.discordapp.com/attachments/989301099422949466/1001006421132984320/Umar_Haqi_Portofolio.pdf' target="_blank" download>
                      <button className='personal-button'>Portofolio (PDF ver.)</button>
                    </a>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        {/* Skills Section */}
        <div className='skills text-black jumbotron jumbotron-fluid p-5'>
          <div className='reveal'>
            <Container>
              <Row className='text-center'>
                <Col data-aos="fade-up" data-aos-duration="1000">
                  <h1 className='m-3'>My Skills</h1>
                </Col>
              </Row>
              <Row className='text-center'>
                <Col data-aos="fade-up" data-aos-duration="1000">
                  <img className='skill-pic mt-3' src='https://cdn-icons-png.flaticon.com/512/1051/1051277.png'/>
                  <p>HTML</p>
                  <p>⭐⭐⭐⭐⭐</p>
                </Col>
                <Col data-aos="fade-up" data-aos-duration="1000">
                  <img className='skill-pic mt-3' src='https://cdn-icons-png.flaticon.com/512/732/732190.png'/>
                  <p>CSS</p>
                  <p>⭐⭐⭐⭐⭐</p>
                </Col>
                <Col data-aos="fade-up" data-aos-duration="1000">
                  <img className='skill-pic mt-3' src='https://cdn-icons-png.flaticon.com/512/3334/3334886.png'/>
                  <p>ReactJS</p>
                  <p>⭐⭐⭐⭐</p>
                </Col>
                <Col data-aos="fade-up" data-aos-duration="1000">
                  <img className='skill-pic mt-3' src='https://cdn-icons-png.flaticon.com/512/5968/5968672.png'/>
                  <p>Bootstrap</p>
                  <p>⭐⭐⭐⭐</p>
                </Col>
                <Col data-aos="fade-up" data-aos-duration="1000">
                  <img className='skill-pic mt-3' src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png'/>
                  <p>Javascript</p>
                  <p>⭐⭐⭐</p>
                </Col>
                <Col data-aos="fade-up" data-aos-duration="1000">
                  <img className='skill-pic mt-3' src='https://cdn-icons-png.flaticon.com/512/5968/5968332.png'/>
                  <p>PHP</p>
                  <p>⭐⭐⭐</p>
                </Col>
                <Col data-aos="fade-up" data-aos-duration="1000">
                  <img className='skill-pic mt-3' src='https://ionicacademy.com/wp-content/uploads/2017/06/ionic-logo-portrait.png'/>
                  <p>Ionic</p>
                  <p>⭐⭐⭐</p>
                </Col>
                <Col data-aos="fade-up" data-aos-duration="1000">
                  <img className='skill-pic mt-3' src='https://cdn.discordapp.com/attachments/989301099422949466/1001013427298373702/codeigniter.png'/>
                  <p>CodeIgniter</p>
                  <p>⭐⭐⭐</p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

          {/* Projects Section */}
          <div id='projects' className='bg-black text-white jumbotron jumbotron-fluid text-center p-5'>
            <div className='reveal'>
              <h1 className='text-uppercase m-5'>My Projects</h1>
              <Container>
                <Row>
                  <Col data-aos="fade-up" data-aos-duration="1000">
                    <a href='https://waddup-eta.vercel.app/' target='_blank'>
                      <button id='Waddup' className='proj-button'>
                        <h2>Waddup</h2>
                        <p>Messenger App</p>
                      </button>
                    </a>
                  </Col>
                  <Col data-aos="fade-up" data-aos-duration="1000">
                    <a href='http://bmi-and-bmr-calc.vercel.app/' target='_blank'>
                      <button id='BMCalc' className='proj-button'>
                        <h2>BMCalc</h2>
                        <p>BMI and BMR Calculator</p>
                      </button>
                    </a>
                  </Col>
                  <Col data-aos="fade-up" data-aos-duration="1000">
                    
                    <a href='https://sleepdisorderexsys.000webhostapp.com/' target='_blank'>
                      <button id='SleepDisorder' className='proj-button'>
                        <h2>SleepDisorder</h2>
                        <p>Expert System</p>
                      </button>
                    </a>
                  </Col>
                  <Col data-aos="fade-up" data-aos-duration="1000">
                    
                    <a href='https://stayinresort.000webhostapp.com/' target='_blank'>
                      <button id='StayIn' className='proj-button'>
                        <h2>StayIn Resort</h2>
                        <p>Resort Booking website</p>
                      </button>
                    </a>
                  </Col>
                  <Col data-aos="fade-up" data-aos-duration="1000">
                    <a href='https://gameboii.000webhostapp.com/' target='_blank'>
                      <button id='Gameboii' className='proj-button'>
                        <h2>Gameboii</h2>
                        <p>Game Rent Website</p>
                      </button>
                    </a>
                  </Col>
                  <Col data-aos="fade-up" data-aos-duration="1000">
                    <a href='https://pti-uas-food-api.vercel.app/' target='_blank'>
                      <button id='FFG' className='proj-button'>
                        <h2>Foodies For Groupies</h2>
                        <p>Food Recipe Website</p>
                      </button>
                    </a>
                  </Col>
                  <Col data-aos="fade-up" data-aos-duration="1000">
                    <a href='https://umn.itch.io/witchahead' target='_blank'>
                      <button id='WitchAhead' className='proj-button'>
                        <h2>WitchAhead</h2>
                        <p>Game</p>
                      </button>
                    </a>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          {/* Contact Section */}
          <div id='contact' className='bg-white text-dark jumbotron jumbotron-fluid p-5'>
            <div data-aos="fade-up">
              <h1 className='text-center text-uppercase mb-4'>Contacts</h1>
              <p data-aos="fade-up" className='text-center'>
                <img className='icon-button' src='https://cdn-icons-png.flaticon.com/512/597/597177.png'/>
                +6287878712774
              </p>
              <p data-aos="fade-up" className='text-center'>
                <img className='icon-button' src='https://cdn-icons-png.flaticon.com/512/646/646135.png'/>
                umarhaqi9@gmail.com
              </p>
              
              <p data-aos="fade-up" className='text-center m-4'>Here are a few of my social media profiles :</p>
              <Container data-aos="fade-up" className='text-center'>
                <Row>
                  <Col>
                    <Button variant='black' className='bg-black text-white rounded-pill m-1' href='https://github.com/umarhaqi9' target='_blank'>
                      <img className='icon-button' src='https://cdn.discordapp.com/attachments/989301099422949466/989301172546437160/github.png'/>
                      Github
                    </Button>
                  </Col>
                  <Col>
                    <Button variant='primary' className='text-white rounded-pill m-1' href='https://www.linkedin.com/in/umar-haqi-6b8720170/' target='_blank'>
                      <img className='icon-button' src='https://cdn.discordapp.com/attachments/989301099422949466/990854583083495424/linkedin.png'/>
                      LinkedIn
                    </Button>
                  </Col>
                  <Col>
                    <Button variant='secondary' className='text-white rounded-pill m-1' href='https://www.instagram.com/umar.haqi912/' target='_blank'>
                      <img className='icon-button' src='https://cdn.discordapp.com/attachments/989301099422949466/989301172236083320/instagram.png'/>
                      Instagram
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
            
          </div>
        
        {/* Footer */}
        <div id='footer' class="text-center p-4 bg-black text-white">
          Copyright &copy; Umar Haqi 2022
        </div>
    </div>
  );
}

export default App;
