import Choosing from '../components/Choosing'
import Rent from '../components/Rent'
import Highlights from '../components/Highlights'
import Clients from '../components/Clients'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Reviews from '../components/Reviews'
import Categories from '../components/Categories'
import './home.css'
export default function Home() {
  return (
    <>
    <a href="https://wa.me/9212697071">
      
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" alt="whatsapp" 
    className='whatsapp'/>
    </a>
      <Hero />
      <Categories />
    <Products />
    <Choosing />
    <Rent />
    <Highlights />
    <Clients />
    <Reviews />
    </>
  )
}
