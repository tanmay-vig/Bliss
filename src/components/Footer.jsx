
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
          <div>
            <div className='g'>&gt;	Desktops</div>
            <div className='g'>&gt;	Laptops</div>
            <div className='g'>&gt;	Mobile Sets</div>
            <div className='g'>&gt;	Servers</div>
          </div>
          
        </div>
        <div className="f">
          <div className="o">Quick Links</div>
          
            
              <Link to="/csr" className='g'> &gt;	CSR</Link>
            
              {/* <Link to="/blog" className='g'> &gt;	Blog
              </Link> */}
              
            
              <Link to="/faq" className='g'> &gt;	FAQ</Link>
            
            
              <Link to="/sustainibilty" className='g'> &gt;	Sustainability</Link>
              
            
            <Link to="/terms" className='g'> &gt;	Terms of Use</Link>
            
            
            <Link to="/policies" className='g'> &gt;	Policies</Link>
            
        </div>

        < div className="f">
          <div className="o">Get in Touch</div>
          <div className="g">
            <i className='fa-solid fa-phone'>+91999999999</i>
          </div>
          <div className="g">
            <i className='fa-solid fa-envelope'>abc@mail</i>
          </div>
          
        </div>
      </div>
      <hr className='text-white'/>
      <div className="text-center text-white">
      © Copyright 2023 Bliss Info Systems. All rights reserved.
      </div> <br />
    </section>
    </>
  )
}
