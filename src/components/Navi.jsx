import {Navbar , Container , Nav , NavDropdown} from 'react-bootstrap'


export default function Navi() {
  return (
    <>
    <Navbar expand="lg" className='border-top'>
    <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link href="#home" className='mx-4'>Home</Nav.Link>
        <Nav.Link href="#About" className='mx-4'>About Us</Nav.Link>
        <NavDropdown title="Products" id="basic-nav-dropdown" className='mx-4'>
          <NavDropdown.Item>Desktops</NavDropdown.Item>
          <NavDropdown.Item>Servers</NavDropdown.Item>
          <NavDropdown.Item>Laptops</NavDropdown.Item>
          <NavDropdown.Item>Seo</NavDropdown.Item>
          <NavDropdown.Item>Marketing</NavDropdown.Item>
          <NavDropdown.Item>Design Package</NavDropdown.Item>
          <NavDropdown.Item>Mobile Sets</NavDropdown.Item>
          <NavDropdown.Item>Wifi Routers</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link" className='mx-4'>CSR</Nav.Link>
        <Nav.Link href="#link" className='mx-4'>Contact Us</Nav.Link>
        <Nav.Link href="#link" className='mx-4'>Blog</Nav.Link>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
  )
}
