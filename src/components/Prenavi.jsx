import {Container} from 'react-bootstrap'
import Bliss from '../assets/logo.jpg'
import './Prenavi.css'
export default function Prenavi() {
  return (
    <>
      <Container className='prenavi'>
        <img src={Bliss} alt="bliss" className='logo'/>
        <a href="https://wa.me/9212697071" className='request'>
          Request a quote</a>
      </Container>
    </>
  )
}
