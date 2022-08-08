import React, { useEffect, useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button , Nav, Container, Navbar, Row, Col, Carousel, Card} from 'react-bootstrap';
import AOS from 'aos';
import "aos/dist/aos.css";
import Player from '../components/Player/Player';
import VanillaTilt from 'vanilla-tilt';
import "vanilla-tilt/dist/vanilla-tilt.min.js";


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
        speed: 500, 
        glare: true,
        "max-glare": .5
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

    const dataGadget = {
      "Gadget" : [
        {
          "Name": "Daiva",
          "Image": "./assets/daiva.png"
        },
        {
          "Name": "Shp9500",
          "Image": "./assets/shp9500.png"
        },
        {
          "Name": "G102",
          "Image": "./assets/g102.png"
        },
        {
          "Name": "Fiio",
          "Image": "./assets/fiio.png"
        }
      ]
    }

    const dataSong = [
      {
        title: "Wasted Nights",
        artist: "ONE OK ROCK",
        img_src: "./assets/album/EOTS.jpg",
        src: "./assets/music/WastedNights.m4a"
      },
      {
        title: "Save Yourself",
        artist: "ONE OK ROCK",
        img_src: "./assets/album/sy.jpg",
        src: "./assets/music/SaveYourself.mp3"
      },
      {
        title: "We Are",
        artist: "ONE OK ROCK",
        img_src: "./assets/album/ambitions.jpg",
        src: "./assets/music/WeAre.mp3"
      },
      {
        title: "FANCY",
        artist: "TWICE",
        img_src: "./assets/album/fancy.jpg",
        src: "./assets/music/Fancy.mp3"
      },
      {
        title: "Peace Be Upon You",
        artist: "Maher Zain",
        img_src: "./assets/album/one.jpg",
        src: "./assets/music/PeaceBeUponYou.mp3"
      },
      {
        title: "夜に駆ける",
        artist: "YOASOBI",
        img_src: "./assets/album/thebook.jpg",
        src: "./assets/music/yorunikakeru.mp3"
      },
      {
        title: "One Way Ticket",
        artist: "ONE OK ROCK",
        img_src: "./assets/album/ambitions.jpg",
        src: "./assets/music/OneWayTicket.mp3"
      },
      {
        title: "Boyfriend",
        artist: "Big Time Rush",
        img_src: "./assets/album/btr.jpg",
        src: "./assets/music/Boyfriend.mp3"
      },
      {
        title: "Photograph",
        artist: "Ed Sheeran",
        img_src: "./assets/album/multiply.jpg",
        src: "./assets/music/Photograph.mp3"
      },
      {
        title: "This I Promise You",
        artist: "NSYNC",
        img_src: "./assets/album/nsa.jpg",
        src: "./assets/music/ThisIPromiseYou.mp3"
      },
    ]

    const [songs] = useState([
      {
        title: "Wasted Nights",
        artist: "ONE OK ROCK",
        img_src: "./assets/album/EOTS.jpg",
        src: "./assets/music/WastedNights.m4a"
      },
      {
        title: "Save Yourself",
        artist: "ONE OK ROCK",
        img_src: "./assets/album/sy.jpg",
        src: "./assets/music/SaveYourself.mp3"
      },
      {
        title: "We Are",
        artist: "ONE OK ROCK",
        img_src: "./assets/album/ambitions.jpg",
        src: "./assets/music/WeAre.mp3"
      },
      {
        title: "FANCY",
        artist: "TWICE",
        img_src: "./assets/album/fancy.jpg",
        src: "./assets/music/Fancy.mp3"
      },
      {
        title: "Peace Be Upon You",
        artist: "Maher Zain",
        img_src: "./assets/album/one.jpg",
        src: "./assets/music/PeaceBeUponYou.mp3"
      },
      {
        title: "夜に駆ける",
        artist: "YOASOBI",
        img_src: "./assets/album/thebook.jpg",
        src: "./assets/music/yorunikakeru.mp3"
      },
      {
        title: "One Way Ticket",
        artist: "ONE OK ROCK",
        img_src: "./assets/album/ambitions.jpg",
        src: "./assets/music/OneWayTicket.mp3"
      },
      {
        title: "Boyfriend",
        artist: "Big Time Rush",
        img_src: "./assets/album/btr.jpg",
        src: "./assets/music/Boyfriend.mp3"
      },
      {
        title: "Photograph",
        artist: "Ed Sheeran",
        img_src: "./assets/album/multiply.jpg",
        src: "./assets/music/Photograph.mp3"
      },
      {
        title: "This I Promise You",
        artist: "NSYNC",
        img_src: "./assets/album/nsa.jpg",
        src: "./assets/music/ThisIPromiseYou.mp3"
      },
    ]);
  
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);
  
    useEffect(() => {
      setNextSongIndex(() => {
        if (currentSongIndex + 1 > songs.length - 1) {
          return 0;
        } else {
          return currentSongIndex + 1;
        }
      });
    }, [currentSongIndex]);

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

        <div id='hobbies' className='bg-white text-black jumbotron pt-1 pb-5'>
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

        <div className='jumbotron bg-black text-white text-center pt-5 pb-5'>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,218.7C384,203,480,117,576,112C672,107,768,181,864,224C960,267,1056,277,1152,245.3C1248,213,1344,139,1392,101.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
          <div data-aos="fade-up">
            <Container>
              <Row className='text-center mt-5'>
                <h1>GADGETS</h1>
                <p>Here are some stuff that keeps me productive :</p>
              </Row>
              <Row className="d-flex justify-content-center text-center mb-5">
                {dataGadget.Gadget.map ((gadget, i) => {
                    return(
                        <Col className="m-3" key={i} data-tilt data-tilt-max="50" data-tilt-speed="500">
                            <div id={gadget.Name} className="hobby-card ">
                                <img src={gadget.Image}/>
                            </div>
                        </Col>
                    )
                })}
              </Row>
            </Container>
          </div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L80,58.7C160,53,320,43,480,58.7C640,75,800,117,960,117.3C1120,117,1280,75,1360,53.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
        </div>

        <div id="music" className='bg-white text-black jumbotron jumbotron-fluid'>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,224L10.9,213.3C21.8,203,44,181,65,181.3C87.3,181,109,203,131,213.3C152.7,224,175,224,196,234.7C218.2,245,240,267,262,250.7C283.6,235,305,181,327,133.3C349.1,85,371,43,393,53.3C414.5,64,436,128,458,128C480,128,502,64,524,74.7C545.5,85,567,171,589,176C610.9,181,633,107,655,64C676.4,21,698,11,720,21.3C741.8,32,764,64,785,80C807.3,96,829,96,851,117.3C872.7,139,895,181,916,176C938.2,171,960,117,982,90.7C1003.6,64,1025,64,1047,58.7C1069.1,53,1091,43,1113,58.7C1134.5,75,1156,117,1178,133.3C1200,149,1222,139,1244,154.7C1265.5,171,1287,213,1309,202.7C1330.9,192,1353,128,1375,96C1396.4,64,1418,64,1429,64L1440,64L1440,0L1429.1,0C1418.2,0,1396,0,1375,0C1352.7,0,1331,0,1309,0C1287.3,0,1265,0,1244,0C1221.8,0,1200,0,1178,0C1156.4,0,1135,0,1113,0C1090.9,0,1069,0,1047,0C1025.5,0,1004,0,982,0C960,0,938,0,916,0C894.5,0,873,0,851,0C829.1,0,807,0,785,0C763.6,0,742,0,720,0C698.2,0,676,0,655,0C632.7,0,611,0,589,0C567.3,0,545,0,524,0C501.8,0,480,0,458,0C436.4,0,415,0,393,0C370.9,0,349,0,327,0C305.5,0,284,0,262,0C240,0,218,0,196,0C174.5,0,153,0,131,0C109.1,0,87,0,65,0C43.6,0,22,0,11,0L0,0Z"></path></svg> */}
          <div data-aos="fade-up">
            <Container>
              <Row className='text-center'>
                <h1>MUSIC</h1>
                <p>Here are some of my favorite type of music :</p>
              </Row>
              <Row className="d-flex justify-content-center mt-4">
                <Col className="col-md-8">
                  <Player 
                    currentSongIndex={currentSongIndex} 
                    setCurrentSongIndex={setCurrentSongIndex} 
                    nextSongIndex={nextSongIndex} 
                    songs={songs}
                  />
                </Col>
              </Row>
              <Row className="d-flex justify-content-center mt-4">
                {dataSong.map((song, i) => {
                  return(
                    <Col key={i} className="col-md-5 m-2">
                      <div  class="card flex-row bg-black text-white">
                        <img class="card-img-sm-left album-art" src={song.img_src}/>
                        <div class="card-body">
                          <h4 class="card-title h5 h4-sm">{song.title}</h4>
                          <p class="card-text">{song.artist}</p>
                        </div>
                      </div>
                    </Col>
                  )
                })}
                
              </Row>
            </Container>
          </div>
        </div>

        {/* Footer */}
        <div id='footer' class="text-center p-4 bg-black text-white">
          Copyright &copy; Umar Haqi 2022
        </div>
    </div>
  )
}

export default Personal