import Carousel from 'react-bootstrap/Carousel';
import './Hero.css'
import pic1 from '../assets2/asset 1.jpeg'
import pic2 from '../assets2/asset 2.jpeg'
import pic4 from '../assets2/asset 4.jpeg'
export default function Hero() {
  return (
    <><Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={pic1}
        alt="First slide"
      />
      <Carousel.Caption >
        <h1 className='text-wrap text-black'>Get Top-of-the-line IT Products on Rent for Your Business</h1>
        <p className='text-wrap'>Why invest in IT products? Choose from our wide range of IT rental plans and grab your pick today.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={pic2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h1 className='text-wrap text-black'>Server Rentals for your IT Needs</h1>
        <p className='text-wrap'>We offer efficient servers on rent across the country. Rent from a wide range of blade server, tower server, or rack mount server to fulfill all your IT needs.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={pic4}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h1 className='text-wrap text-black'>Rent IT Equipment for Your Business Needs</h1>
        <p className='text-wrap'>
        Transform your place into a productive work environment by renting all the IT equipment you need from Get It Rent.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </>
  )
}
