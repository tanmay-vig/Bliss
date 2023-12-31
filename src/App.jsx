import Navi from './components/Navi'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
// import Blog from './pages/Blog'
import Csr from './pages/Csr'
import Laptops from './pages/products/Laptops'
import Desktop from './pages/products/Desktop'
import All from './pages/products/All'
import Server from './pages/products/Server'
import Cctv from './pages/products/Cctv'
import Scanner from './pages/products/Scanner'
import Projector from './pages/products/Projector'
import Rfid from './pages/products/Rfid'
import Apple from './pages/products/Apple'
import Faq from "./pages/Faq"
import Tablet from './pages/products/Tablet'
import { Route , Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sustainibility from './pages/Sustainibility'
import Policies from './pages/Policies'
import Terms from './pages/Terms'

import Website from './pages/products/Website'
import Seo from './pages/products/Seo'
function App() {
  

  return (
    <>
    <Navi />
    <Routes>
    <Route path='/' element={ <Home />} />
    <Route path='/about' element = { <About />} />
    {/* <Route path='/blog' element = { <Blog />} /> */}
    <Route path='/why' element = { <Csr />} />
    <Route path='/sustainibilty' element = { <Sustainibility />} />
    <Route path='/faq' element = { <Faq />} />
    <Route path='/policies' element={ <Policies /> } />
    <Route path='/terms' element={ <Terms /> } />
    <Route path='/laptops' element={<Laptops />} />
    <Route path='/Desktop' element={<Desktop />} />
    <Route path='/Server' element={<Server />} />
    <Route path='/All' element={< All />} />
    <Route path='/cctv' element={< Cctv />} />
    <Route path='/scanner' element={< Scanner />} />
    <Route path='/projector' element={< Projector />} />
    <Route path='/apple' element={< Apple />} />
    <Route path='/rfid' element={< Rfid />} />
    <Route path='/tablet' element={< Tablet />} />
    <Route path='/website' element= { <Website />} />
    <Route path='/seo' element= { <Seo />} />
    
    </Routes>
    <Footer />
    </>
  )
}

export default App
