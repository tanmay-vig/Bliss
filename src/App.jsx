import Navi from './components/Navi'
import Footer from './components/Footer'
import Prenavi from './components/Prenavi'
import Home from './pages/Home'
import About from './pages/About'
import { Route , Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <>
    <Prenavi />
    <Navi />
    <Routes>
    <Route path='/' element={ <Home />} />
    <Route path='/about' element = { <About />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
