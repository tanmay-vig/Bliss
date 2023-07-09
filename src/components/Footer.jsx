
import pic1 from '../assets/logo.jpg'
import './footer.css'
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
            <li>CSR</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Sustainability</li>
            <li>Terms of Use</li>
            <li>Policies</li>
          </ul>
        </div>
        <div className="f">
          <div className="o">Get in Touch</div>
        </div>
      </div>
    </section>
    </>
  )
}
