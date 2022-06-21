// import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,NavDropdown, Nav, Container, Navbar, Carousel } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant='dark' expand="lg">
        <Container>
          <Navbar.Brand href="#home">Umar Haqi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">CV</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div >
        <Carousel expand="md">
          <Carousel.Item>
            <img
              className='h-20 w-100'
              src='https://cdn.discordapp.com/attachments/841587576464736266/986560455210332180/20220615_161758.jpg'
              alt='First Slide'
              />
            <Carousel.Caption>
              <h3>Working Space</h3>
              <p>This is where I do most of my work</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='h-20 w-100'
              src='https://cdn.discordapp.com/attachments/841587576464736266/986560455210332180/20220615_161758.jpg'
              alt='Second Slide'
              />
            <Carousel.Caption>
              <h3>Working Space</h3>
              <p>This is where I do most of my work</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='h-20 w-100'
              src='https://cdn.discordapp.com/attachments/841587576464736266/986560455210332180/20220615_161758.jpg'
              alt='Third Slide'
              />
            <Carousel.Caption>
              <h3>Working Space</h3>
              <p>This is where I do most of my work</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      

      <Container className='w-100'>
        <h1>Hello, I'm Umar!</h1>
        <p>
          
        </p>
        <p>
          <Button bsStyle="primary">Learn more</Button>
        </p>
      </Container>
      
    </div>
  );
}

export default App;
