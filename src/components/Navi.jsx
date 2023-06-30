
import {Navbar } from 'react-bootstrap'
import Bliss from '../assets/logo.jpg'
export default function Navi() {
  return (
    <>
    <Navbar expand='lg' variant='light' bg='light'>
      <Navbar.Brand>
        <img src={Bliss} alt="Bliss-logo" height={30} className='mx-3' />
        BLISS INFOSYSTEMS
      </Navbar.Brand>
    </Navbar>
    </>
  )
}
