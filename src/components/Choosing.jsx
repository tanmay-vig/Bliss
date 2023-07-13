import './Choose.css'
import pic1 from '../assets2/choose1.png'
import pic2 from '../assets2/choose2.png'
import pic3 from '../assets2/choose3.png'
import pic4 from '../assets2/choose4.png'
import pic5 from '../assets2/choose5.png'
import pic6 from '../assets2/choose6.png'
import pic7 from '../assets2/choose7.png'
import pic8 from '../assets2/choose8.png'
export default function Choosing() {
  return (
    <>
    <br /> <br />
      <h2 className=' text-center m-5'>Why Choose Us ?</h2>
      <h4 className='text-center'> We offer different products, such as laptops, 
      desktops,  servers, and many other office IT products across India.</h4> <br />
      <div className='box'>
        <div className="ch">
            <img src={pic1} alt="pic1" />
            <h4>Pan-India Delivery</h4>
            <p>We have multiple branches and warehouses across
                 India that help us to deliver the right product at the right
                  time to our customers so that our customers do not run out of 
                  product when they need it the most.</p>
        </div>
        <div className="ch">
            <img src={pic2} alt="pic2" />
            <h4>Competitive Pricing</h4>
            <p>We offer the most reasonable rental prices for all IT 
                products with easy and convenient payment options for our customers.</p>
        </div>
        <div className="ch">
            <img src={pic3} alt="pic3" />
            <h4>Post Rental Support</h4>
            <p>We are just a call away! Our superior customer care experts 
                are available round the clock to address any kind of need, 
                be it on-site support, remote troubleshooting, or any other problem fixing.</p>
        </div>
        <div className="ch">
            <img src={pic4} alt="pic4" />
            <h4>Hight Fill Rate</h4>
            <p>We have a robust supply chain that is backed by a huge inventory
                 chain across all product categories PAN India which is growing 
                 with each passing time. We cater to each and every IT requirement
                  and offer the best products without compromising on quality and quantity!</p>
        </div>
      </div> <br /> 
      <div className='box'>
        <div className="ch">
            <img src={pic5} alt="pic5" />
            <h4>Flexible Tenure</h4>
            <p>We offer flexible tenure options for renting of laptops, 
                desktops, and all other IT products that suit your business 
                needs which vary from a day, to a week, a month or a year</p>
        </div>
        <div className="ch">
            <img src={pic6} alt="pic6" />
            <h4>Comprehensive Solutions</h4>
            <p>A business requires multiple solutions to complement the IT products 
                that are being used, Get It Rent offers comprehensive solutions 
                right from providing the right software solution required for the 
                right kind of work to networking solutions and any other IT needs.</p>
        </div>
        <div className="ch">
            <img src={pic7} alt="pic7" />
            <h4>Corporate and Bulk Deal</h4>
            <p>With a huge inventory of products, unmatched network of service 
                associates and Pan India presence, Get It Rent has set itself as 
                a company of choice for any type of corporate and bulk deals.</p>
        </div>
        <div className="ch">
            <img src={pic8} alt="pic8" />
            <h4>One Time Delivery</h4>
            <p>Bliss Infosystems is more than just about being a supplier;
                 it's about being a solutions provider.</p>
        </div>
      </div>
    </>
  )
}
