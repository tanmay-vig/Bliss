import './Rent.css'
import pic1 from '../assets2/rent1.png'
import pic2 from '../assets2/rent2.png'
import pic3 from '../assets2/rent3.png'
import pic4 from '../assets2/rent4.png'

export default function Rent() {
  return (
    <> <br />
    <h2 className="text-center">How To Rent Your Equipment?</h2>
    <p className='text-center'> We are a professionally managed organization providing affordable 
    IT rental services across India. We provide top-quality rental solutions for all IT equipment 
    and IT services. You do not have to worry about traveling long distances to get your products.
     We assure to deliver our hassle free services to you at your doorstep.</p> <br />
      <div className='box1'>
        <div className="ch1">
          <div className='step'>1</div> <br />
            <img src={pic1} alt="pic1" />
            <h4>Request a Quote</h4>
            <p>You can seek customized plans for your business requirements 
              by communicating with our experts to get specific quotes and 
              select the one that suits your needs.</p>
        </div>
        <div className="ch1">
        <div className='step'>2</div> <br />
            <img src={pic2} alt="pic2" />
            <h4>Payment</h4>
            <p>We offer hassle-free and customized payment options to our customers 
              for all their IT product requirements.</p>
        </div>
        <div className="ch1">
        <div className='step'>3</div> <br />
            <img src={pic3} alt="pic3" />
            <h4>Delivery</h4>
            <p>We strive to deliver everything you need to your
               doorstep within the shortest stipulated time.</p>
        </div>
        <div className="ch1">
        <div className='step'>4</div> <br />
            <img src={pic4} alt="pic4" />
            <h4>Post Rental Support</h4>
            <p>We provide robust post-rental support for all our rental products. 
              We are just a call away! You can reach us anytime regarding any product issues, 
              and we are commited to resolve them at the earliest.</p>
        </div>
      </div>
    </>
  )
}
