import './App.css';
import React, { useEffect, useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Alert, Nav, Container, Navbar, Row, Col, Carousel} from 'react-bootstrap';
import AOS from 'aos';
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';



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

  // EmailJS Script
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a2w6pej', 'template_63vsmyr', form.current, 'r64VvUaQDUtl1e-ip')
      .then((result) => {
          console.log(result.text);
          setShowAlert(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  // End of EmailJS

  

  // Data
  const skillsData = {
    "Skill": [
      {
        "Name": "HTML",
        "Logo": "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
        "Rating": "⭐⭐⭐⭐⭐"
      },
      {
        "Name": "CSS",
        "Logo": "https://cdn-icons-png.flaticon.com/512/732/732190.png",
        "Rating": "⭐⭐⭐⭐⭐"
      },
      {
        "Name": "ReactJS",
        "Logo": "https://cdn-icons-png.flaticon.com/512/3334/3334886.png",
        "Rating": "⭐⭐⭐⭐"
      },
      {
        "Name": "Bootstrap",
        "Logo": "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
        "Rating": "⭐⭐⭐⭐"
      },
      {
        "Name": "Javascript",
        "Logo": "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        "Rating": "⭐⭐⭐"
      },
      {
        "Name": "PHP",
        "Logo": "https://cdn-icons-png.flaticon.com/512/5968/5968332.png",
        "Rating": "⭐⭐⭐"
      },
      {
        "Name": "Ionic",
        "Logo": "https://ionicacademy.com/wp-content/uploads/2017/06/ionic-logo-portrait.png",
        "Rating": "⭐⭐⭐"
      },
      {
        "Name": "CodeIgniter",
        "Logo": "https://cdn.discordapp.com/attachments/989301099422949466/1001013427298373702/codeigniter.png",
        "Rating": "⭐⭐⭐"
      },
      {
        "Name": "Figma",
        "Logo": "https://brandlogos.net/wp-content/uploads/2022/05/figma-logo_brandlogos.net_6n1pb.png",
        "Rating": "⭐⭐⭐⭐"
      },
    ]
  };

  const projectsData = {
    "Project": [
      {
        "id": "Waddup",
        "Name": "Waddup",
        "Desc": "Messenger App",
        "Link": "https://waddup-eta.vercel.app/",
        "Image": "https://cdn.discordapp.com/attachments/989301099422949466/1001764374555410453/unknown.png"
      },
      {
        "id": "BMCalc",
        "Name": "BMCalc",
        "Desc": "BMI and BMR Calculator",
        "Link": "http://bmi-and-bmr-calc.vercel.app/",
        "Image": "https://cdn.discordapp.com/attachments/989301099422949466/1001764374874161187/unknown.png"
      },
      {
        "id": "SleepDisorder",
        "Name": "SleepDisorder",
        "Desc": "Expert System",
        "Link": "https://sleepdisorderexsys.000webhostapp.com/",
        "Image": "https://cdn.discordapp.com/attachments/989301099422949466/1001764375700459540/unknown.png"
      },
      {
        "id": "StayIn",
        "Name": "StayIn",
        "Desc": "Resort Booking Website",
        "Link": "https://stayinresort.000webhostapp.com/",
        "Image": "https://cdn.discordapp.com/attachments/989301099422949466/1001764606076788736/unknown.png"
      },
      {
        "id": "Gameboii",
        "Name": "Gameboii",
        "Desc": "Game Rent Website",
        "Link": "https://gameboii.000webhostapp.com/",
        "Image": "https://cdn.discordapp.com/attachments/989301099422949466/1001764606479433798/unknown.png"
      },
      {
        "id": "FFG",
        "Name": "Foodies For Groupies",
        "Desc": "Food Recipe Website",
        "Link": "https://pti-uas-food-api.vercel.app/",
        "Image": "https://cdn.discordapp.com/attachments/989301099422949466/1001765024450224208/unknown.png"
      },
      {
        "id": "WitchAhead",
        "Name": "WitchAhead",
        "Desc": "Game",
        "Link": "https://umn.itch.io/witchahead",
        "Image": "https://cdn.discordapp.com/attachments/989301099422949466/1001765226980593664/unknown.png"
      },
    ]
  };

  

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
        <div  id='welcome' className='bg-black text-white text-center p-5'>
          
          <img data-aos="zoom-in-up" className='profpic' src='https://cdn.discordapp.com/attachments/841587576464736266/896039768499032064/20211008_212135.jpg'/>
          <h1 data-aos="fade-up" data-aos-delay="500">Hi, I'm Umar!</h1>
          <p data-aos="fade-up" data-aos-delay="800">
            Welcome to my personal website. This site will provide informations
            about myself. 
          </p>
        </div>
        <div  className='bg-white text-center'>
          <a href='#moreaboutme'>
            <button data-aos="fade-up" data-aos-delay="1000" className='scrollBtn'>Scroll Down!</button>
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
                    <a href='https://drive.google.com/file/d/1VzOISpCT1-o2oTP0y3tlkvOnOuv_I_VL/view?usp=sharing' target="_blank" download>
                      <button className='personal-button'>CV</button>
                    </a>
                    <a href='https://drive.google.com/file/d/1CIygLbbTdiCorui2nJm-1tT-tGZ0Itt-/view?usp=sharing' target="_blank" download>
                      <button className='personal-button'>Portofolio (PDF ver.)</button>
                    </a>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        {/* Skills Section*/}
        <div className='skills text-black jumbotron jumbotron-fluid p-5'>
            <Container>
              <Row className='text-center'>
                <Col data-aos="fade-up">
                  <h1 className='m-3'>My Skills</h1>
                </Col>
              </Row>
              <Row className='text-center'>
                {skillsData.Skill.map((skill, index) => {
                  return(
                    <Col className='skill-card' data-aos="fade-up" data-aos-delay="300" key={index}>
                        <img className='skill-pic mt-3' src={skill.Logo}/>
                        <p>{skill.Name}</p>
                        <p>{skill.Rating}</p>
                    </Col>
                  );
                })
                }
              </Row>
            </Container>
        </div>

        {/* Projects*/}
        <div id='projects' className='bg-black text-white jumbotron jumbotron-fluid text-center p-5'>
            <h1 data-aos="fade-up" className='text-uppercase m-5'>My Projects</h1>
            <Container>
              <Row>
                {projectsData.Project.map((project, index) => {
                  return(
                    <Col data-aos="fade-up" data-aos-delay="350" key={index}>
                      <a href={project.Link} target='_blank'>
                        <button id={project.id} className='proj-button'>
                          <div className='proj-name'>
                            <h2>{project.Name}</h2>
                            <p>{project.Desc}</p>
                          </div>
                          
                        </button>
                      </a>
                    </Col>
                  )
                })}
              </Row>
            </Container>
        </div>

        {/* Contact Section */}
        <div id='contact' className='bg-white text-dark jumbotron jumbotron-fluid p-5'>
          <div data-aos="fade-up">
            <Container className='p-3'>
              <Row>
                <Col className='mb-5'>
                  <Row>
                    <h1 className=' text-uppercase mb-4'>Contacts</h1>
                  </Row>
                  <Row>
                    <p data-aos="fade-up">
                      <img className='icon-button' src='https://cdn-icons-png.flaticon.com/512/597/597177.png'/>
                      +6287878712774
                    </p>
                  </Row>
                  <Row>
                    <p data-aos="fade-up" className=''>
                      <img className='icon-button' src='https://cdn-icons-png.flaticon.com/512/646/646135.png'/>
                      umarhaqi9@gmail.com
                    </p>
                  </Row>
                  <Row>
                    <p data-aos="fade-up">Here are a few of my social media profiles :</p>
                  </Row>
                  <Row className='text-center float-left'>
                    <Container data-aos="fade-up" >
                      <Row>
                        <Col>
                          <Button variant='black' className='bg-black text-white rounded-pill mt-3' href='https://github.com/umarhaqi9' target='_blank'>
                            <img className='icon-button' src='https://cdn.discordapp.com/attachments/989301099422949466/989301172546437160/github.png'/>
                            Github
                          </Button>
                        </Col>
                        <Col>
                          <Button variant='primary' className='text-white rounded-pill mt-3' href='https://www.linkedin.com/in/umar-haqi-6b8720170/' target='_blank'>
                            <img className='icon-button' src='https://cdn.discordapp.com/attachments/989301099422949466/990854583083495424/linkedin.png'/>
                            LinkedIn
                          </Button>
                        </Col>
                        <Col>
                          <Button variant='secondary' className='text-white rounded-pill mt-3' href='https://www.instagram.com/umar.haqi912/' target='_blank'>
                            <img className='icon-button' src='https://cdn.discordapp.com/attachments/989301099422949466/989301172236083320/instagram.png'/>
                            Instagram
                          </Button>
                        </Col>
                      </Row>
                    </Container>
                  </Row>
                </Col>

                {/* Email form */}
                <Col>
                  <h1 data-aos="fade-up" className='text-right mb-3 '>Direct Contact</h1>
                  <p data-aos="fade-up" className='text-justify'>
                    If you have any feedbacks, critics, job offer, or anything you want to discuss,
                    feel free to contact me by filling out this form!
                  </p>
                  <Container>
                    <Row>
                        <form ref={form} onSubmit={sendEmail}>
                          <div data-aos="fade-up" data-aos-delay="450" class="form-group m-3">
                            <label for="name">Name</label>
                            <input type="text" name="user_name" class="form-control" id="name"  placeholder="Enter Name"/>
                          </div>
                          <div data-aos="fade-up" data-aos-delay="450" class="form-group m-3">
                            <label for="email">Email address</label>
                            <input type="email" name="user_email" class="form-control" id="email" placeholder="Enter Email"/>
                          </div>
                          <div data-aos="fade-up" data-aos-delay="450" class="form-group m-3">
                            <label for="message">Message</label>
                            <textarea name="message" class="form-control" rows="4" id="message" placeholder="Enter Message..."/>
                          </div>
                          <button type="submit" class="btn btn-primary m-3 submitBtn" data-aos="fade-up" data-aos-delay="450" value="Send">Send</button>
                        </form>
                    </Row>
                  </Container>
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
