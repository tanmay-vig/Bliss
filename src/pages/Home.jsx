import Choosing from '../components/Choosing'
import Rent from '../components/Rent'
import Highlights from '../components/Highlights'
import Clients from '../components/Clients'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Reviews from '../components/Reviews'
import Categories from '../components/Categories'
export default function Home() {
  return (
    <>
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
