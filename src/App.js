import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,NavDropdown, Nav, Container, Navbar, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Navbar className='fixed-top' bg="black" variant='dark' expand="lg">
        <Container>
          <Navbar.Brand href="#home">Umar Haqi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#welcome">About Me</Nav.Link>
              <Nav.Link href="#projects">My Projects</Nav.Link>
              <Nav.Link href="#link">CV</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div id='welcome' className='bg-black text-white jumbotron jumbotron-fluid text-center p-5'>
        <img className='profpic' src='https://cdn.discordapp.com/attachments/841587576464736266/896039768499032064/20211008_212135.jpg'/>
        <h1>Hi, I'm Umar!</h1>
        <p>I'm a front-end developer. My very big interests are in HTML, CSS, reactJS, and Ionic React.</p>
      </div>

      <div id='projects' className='bg-white text-dark jumbotron jumbotron-fluid text-center p-5'>
        <h1 className='m-5'>My Projects</h1>
        <Container>
          <Row>
            <Col>
              <Button className='proj-button' variant='secondary' size='lg' href='https://waddup-eta.vercel.app/' target="_blank">
                <div className='button-text'>
                  <h2>Waddup</h2>
                  <p>Messenger App</p>
                </div>
                
              </Button>
            </Col>
            <Col>
              <Button className='proj-button' variant='secondary' size='lg' href='http://bmi-and-bmr-calc.vercel.app/' target="_blank">
                <div className='button-text'>
                  <h2>BMCalc</h2>
                  <p>BMI and BMR Calculator</p>
                </div>
              </Button>
            </Col>
            <Col>
              <Button className='proj-button' variant='secondary' size='lg' href='https://sleepdisorderexsys.000webhostapp.com/' target="_blank">
                <div className='button-text'>
                  <h2>SleepDisorder</h2>
                  <p>Expert System</p>
                </div>
              </Button>
            </Col>
          </Row>
          
        </Container>
        
      </div>

      <div id='footer' class="text-center p-4 bg-black text-white">
        Copyright &copy; Umar Haqi 2022
      </div>
      
      

    </div>

    
    
  );
}

export default App;
