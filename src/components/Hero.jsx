
import { Carousel } from "react-bootstrap"
import Laptop from '../assets/laptop.jpg'
import './Hero.css'
export default function Hero() {
  return (
    <>
    <Carousel className="carousel">
      <Carousel.Item>
        <img src={Laptop} alt="laptop" className="carousel-img"/>
        <Carousel.Caption>
          <h3>Best Laptops</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Laptop} alt="laptop"  className="carousel-img"/>
      <Carousel.Caption>
          <h3>Best Laptops</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Laptop} alt="laptop"  className="carousel-img"/>
      <Carousel.Caption>
          <h3>Best Laptops</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}
