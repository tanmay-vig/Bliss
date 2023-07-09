import './highlights.css'
import pic1 from '../assets2/high1.png'
import pic2 from '../assets2/high2.png'
import pic3 from '../assets2/high3.png'
import pic4 from '../assets2/high4.png'
import pic5 from '../assets2/high5.png'
export default function Highlights() {
  return (
    <> <br />
      <h2 className='text-center'>Take a Look At Our Striking Highlights!</h2> <br />
      <div className='box2'>
        <div className="ch2">

            <img src={pic1} alt="pic1" />
            <h4>500+</h4>
            <p>Projects served across the country</p>
        </div>
        <div className="ch2">
            <img src={pic2} alt="pic2" />
            <h4>40000+</h4>
            <p>Rented products</p>
        </div>
        <div className="ch2">
            <img src={pic3} alt="pic3" />
            <h4>400+</h4>
            <p>Pan India cities covered</p>
        </div>
        <div className="ch2">
            <img src={pic4} alt="pic4" />
            <h4>12+</h4>
            <p>Years in the industry</p>
        </div>
        <div className="ch2">
            <img src={pic5} alt="pic5" />
            <h4>500+</h4>
            <p>Service associates for your needs</p>
        </div>
        
      </div>
    </>
  )
}
