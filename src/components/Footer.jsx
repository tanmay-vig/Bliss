
import pic1 from '../assets/logo.jpg'
import './footer.css'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <> <br />
    <section className='footer'> <br /> <br />
      <div className="footer-container">
        <div className="f"> 
          <img src={pic1} alt="pic1" width={150} height={100} />
          <div className='g'>ABC Town , New Delhi</div>
        </div>
        <div className="f">
          <div className="o">Our Products</div>
          <ul className='g'>
            <li>Desktops</li>
            <li>Laptops</li>
            <li>Mobile Sets</li>
            <li>Servers</li>
          </ul>
        </div>
        <div className="f">
          <div className="o">Quick Links</div>
          <ul className='g'>
            <li>
              <Link to="/csr">CSR</Link></li>
            <li>
              <Link to="/blog">Blog
              </Link>
              </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/sustainibilty">Sustainability</Link>
              </li>
            <li>
            <Link to="/terms">Terms of Use</Link>
            </li>
            <li>
            <Link to="/policies">Policies</Link>
            </li>
          </ul>
        </div>
        < div className="f">
          <div className="o">Get in Touch</div>
          <div className="g">
            <i className='fa-solid fa-phone'>+91999999999</i>
          </div>
          <div className="g">
            <i className='fa-solid fa-envelope'>abc@mail</i>
          </div>
          <div className="flex">
          <a href="" className='fa-brands fa-instagram r'></a>
          <a href="" className='fa-brands fa-facebook r'></a>
          <a href="" className='fa-brands fa-twitter r'></a>
          <a href="" className='fa-brands fa-linkedin r'></a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
