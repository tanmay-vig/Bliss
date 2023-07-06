import './Hero.css'
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../assets2/asset 1.jpeg'
import pic2 from '../assets2/asset 2.jpeg'
import pic4 from '../assets2/asset 4.jpeg'
export default function Hero() {
  return (
    <><Carousel variant='dark'>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={pic1}
        alt="First slide"
      />
      <div className='carousel-caption1'>
        <h1 className=' text-black'>Get Top-of-the-line IT <br />Products on Rent for <br />Your Business</h1>
        <div className=' text-black d-none d-lg-block d-md-none'>Why invest in IT products? Choose from our wide <br /> range of IT rental plans and grab your pick today.</div>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={pic2}
        alt="Second slide"
      />

      <div className='carousel-caption1'>
        <h1 className=' text-black'>Server Rentals for <br /> your IT Needs</h1>
        <div className=' text-black d-none d-lg-block d-md-none'>We offer efficient servers on rent across the country. <br /> Rent from a wide range of blade server, tower server, <br />or rack mount server to fulfill all your IT needs.</div>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={pic4}
        alt="Third slide"
      />

      <div className='carousel-caption1'>
        <h1 className=' text-black'>Rent IT Equipment <br />for Your Business Needs</h1>
        <div className=' text-black d-none  d-lg-block d-md-none'>
        Transform your place into a productive work environment <br />by renting all the IT equipment you need from Get It Rent.
        </div>
      </div>
    </Carousel.Item>
  </Carousel>
    </>
  )
}
