import Navi from './components/Navi'
import Hero from './components/Hero'
import Products from './components/Products'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import Prenavi from './components/Prenavi'
import Choosing from './components/Choosing'
import Rent from './components/Rent'
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
    <Reviews />
    <Footer />
    </>
  )
}

export default App
