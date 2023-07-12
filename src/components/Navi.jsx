import {Navbar , Container , Nav , NavDropdown} from 'react-bootstrap'
import './navi.css'
import {Link} from 'react-router-dom'
export default function Navi() {
  return (
    <>
    <Navbar expand="lg" className='n'> 
    <Container>
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
              Desktop
            </Link>
            </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/laptops" className='links'>
              Laptops
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/projector" className='links'>
              Projector
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/cctv" className='links'>CCTV</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/scanner" className='links'>
              Scanner
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/tablet" className='links'>
              Tablets
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/walkie" className='links'> 
            Walkie Talkie
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/server" className='links'>
              Server
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/all" className='links'>
              All in One
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/apple" className='links'>
              Apple
            </Link>
          </NavDropdown.Item>
        </NavDropdown>
        <Nav className="mx-5">
          <Link to="/csr" className='links'>CSR</Link></Nav>
        <Nav.Link href="https://wa.me/9212697071" className='mx-5'>Contact Us</Nav.Link>
        <Nav className="mx-5">
          <Link to="/blog" className='links'>Blog</Link></Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
  )
}
