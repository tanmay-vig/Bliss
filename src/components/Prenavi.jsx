import {Container} from 'react-bootstrap'
import Bliss from '../assets/logo.jpg'
import './Prenavi.css'
export default function Prenavi() {
  return (
    <>
      <Container>
        <img src={Bliss} alt="bliss" className='logo'/>
        <div className='d-inline mx-5'>Request a quote</div>
      </Container>
    </>
  )
}
