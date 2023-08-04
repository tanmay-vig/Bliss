import {Navbar , Container , Nav , NavDropdown} from 'react-bootstrap'
import './navi.css'
import {Link} from 'react-router-dom'
import pic from '../assets/logo.png'
export default function Navi() {
  return (
    <>
    <Navbar expand="lg" className='n'> 
    <Container>
      <Navbar.Brand> <Link to="/">
        <img src={pic} alt="bliss" height={70}/> 
      </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-5">
          <Link to="/"  className="links">Home</Link>
        </Nav>
        <Nav className="mx-5">
          <Link  to="/about"  className="links">About Us</Link>
          </Nav>
        <NavDropdown title="Products" id="basic-nav-dropdown" className='mx-5'>
          <NavDropdown.Item>
            <Link to="/desktop" className='links'>
              DESKTOPS
            </Link>
            </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/laptops" className='links'>
              LAPTOPS
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/projector" className='links'>
              PROJECTOR
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/cctv" className='links'>CCTV</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/scanner" className='links'>
              SCANNER
            </Link>
          </NavDropdown.Item>
          {/* <NavDropdown.Item>
            <Link to="/tablet" className='links'>
              Tablets
            </Link>
          </NavDropdown.Item> */}
          <NavDropdown.Item>
            <Link to="/walkie" className='links'> 
            RFID SENSORS
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/server" className='links'>
              SERVERS
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/all" className='links'>
              ALL IN ONE
            </Link>
          </NavDropdown.Item>
          
        </NavDropdown>
        <Nav className="mx-5">
          <Link to="/why" className='links'>Why bliss?</Link></Nav>
        <Nav.Link href="https://wa.me/9212697071" className='mx-5'>Contact Us</Nav.Link>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
  )
}
