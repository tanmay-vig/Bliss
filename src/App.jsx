import Navi from './components/Navi'
import Hero from './components/Hero'
import Products from './components/Products'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import Prenavi from './components/Prenavi'
import Choosing from './components/Choosing'
import Rent from './components/Rent'
import Highlights from './components/Highlights'
import Clients from './components/Clients'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <>
    <Prenavi />
    <Navi />
    <Hero />
    <Products />
    <Choosing />
    <Rent />
    <Highlights />
    <Clients />
    <Reviews />
    <Footer />
    </>
  )
}

export default App
