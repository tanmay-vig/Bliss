import {Navbar , Container , Nav , NavDropdown} from 'react-bootstrap'
import './navi.css'
import {Link} from 'react-router-dom'
export default function Navi() {
  return (
    <>
    <Navbar expand="lg" className='border-top'> 
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
          <NavDropdown.Item>Desktops</NavDropdown.Item>
          <NavDropdown.Item>Servers</NavDropdown.Item>
          <NavDropdown.Item>Laptops</NavDropdown.Item>
          <NavDropdown.Item>Seo</NavDropdown.Item>
          <NavDropdown.Item>Marketing</NavDropdown.Item>
          <NavDropdown.Item>Design Package</NavDropdown.Item>
          <NavDropdown.Item>Mobile Sets</NavDropdown.Item>
          <NavDropdown.Item>Wifi Routers</NavDropdown.Item>
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
