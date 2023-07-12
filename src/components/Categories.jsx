
import pic1 from '../assets2/asset 5.png'
import pic2 from '../assets2/asset 10.png'
import pic4 from '../assets2/asset 12.png'
import pic5 from '../assets2/asset 13.png'
import pic6 from '../assets2/asset 6.png'
import pic7 from '../assets2/asset 7.png'
import pic8 from '../assets2/asset 8.png'
import pic9 from '../assets2/asset 9.png'
import pic10 from '../assets2/asset 11.png'
import './categories.css'
import {Link} from 'react-router-dom'
export default function Categories() {
  return (
    <section className='categories'> <br /> <br />
      <h2 className='text-center'>Browse by Category</h2> <br />
      <div className="c">
        <Link to="/All" className="r1"  >
            <img src={pic1} alt="pic" />
            <div>All in One</div>
        </Link>
        <Link to="/Server" className="r1">
            <img src={pic2} alt="pic" />
            <div>Server</div>
        </Link>
        
        <Link to="/Laptops" className="r1">
            <img src={pic4} alt="pic" />
            <div>Laptops</div>
        </Link>
        <Link to="/Desktop" className="r1">
            <img src={pic5} alt="pic" />
            <div>Desktops</div>
        </Link>
        <Link to="/cctv" className="r1">
            <img src={pic6} alt="pic" />
            <div>CCTV</div>
        </Link>
        </div>
         <br />
        <div className="c">
        
        
        <Link to="/scanner" className="r1">
            <img src={pic7} alt="pic" />
            <div>Scanner</div>
        </Link>
        <Link to="/projecter" className="r1">
            <img src={pic8} alt="pic" />
            <div>Projector</div>
        </Link>
        <Link to="/walkie" className="r1">
            <img src={pic9} alt="pic" />
            <div>Walkie Talkie</div>
        </Link>
        <Link to="/apple" className="r1">
            <img src={pic10} alt="pic" />
            <div>Apple</div>
        </Link>
      </div>
      
    </section>
  )
}
