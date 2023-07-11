import Navi from './components/Navi'
import Footer from './components/Footer'
import Prenavi from './components/Prenavi'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Csr from './pages/Csr'
import Laptops from './pages/products/Laptops'
import Desktop from './pages/products/Desktop'
import All from './pages/products/All'
import Server from './pages/products/Server'
import Faq from "./pages/Faq"
import { Route , Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sustainibility from './pages/Sustainibility'
import Policies from './pages/Policies'
import Terms from './pages/Terms'

function App() {
  

  return (
    <>
    <Prenavi />
    <Navi />
    <Routes>
    <Route path='/' element={ <Home />} />
    <Route path='/about' element = { <About />} />
    <Route path='/blog' element = { <Blog />} />
    <Route path='/csr' element = { <Csr />} />
    <Route path='/sustainibilty' element = { <Sustainibility />} />
    <Route path='/faq' element = { <Faq />} />
    <Route path='/policies' element={ <Policies /> } />
    <Route path='/terms' element={ <Terms /> } />
    <Route path='/laptops' element={<Laptops />} />
    <Route path='/Desktop' element={<Desktop />} />
    <Route path='/Server' element={<Server />} />
    <Route path='/All' element={< All />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
