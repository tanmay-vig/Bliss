
import Bliss from '../assets/logo.png'
import './Prenavi.css'
export default function Prenavi() {
  return (
    <>
      <div className='prenavi'>
        <img src={Bliss} alt="bliss" className='logo'/>
        <a href="https://wa.me/9212697071" className='request'>
          Request a quote</a>
      </div>
    </>
  )
}
