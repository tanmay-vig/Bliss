import Navi from './components/Navi'
import Hero from './components/Hero'
import Products from './components/Products'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import Prenavi from './components/Prenavi'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <>
    <Prenavi />
    <Navi />
    <Hero />
    <Products />
    <Reviews />
    <Footer />
    </>
  )
}

export default App
