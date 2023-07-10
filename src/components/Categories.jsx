
import pic1 from '../assets2/asset 5.png'
import pic2 from '../assets2/asset 7.png'
import pic3 from '../assets2/asset 10.png'
import pic4 from '../assets2/asset 12.png'
import pic5 from '../assets2/asset 13.png'
import './categories.css'

export default function Categories() {
  return (
    <section className='categories'> <br /> <br />
      <h2 className='text-center'>Browse by Category</h2> <br />
      <div className="c">
        <div className="r">
            <img src={pic1} alt="pic" />
            <div>All in One</div>
        </div>
        <div className="r">
            <img src={pic2} alt="pic" />
            <div>Wifi Routers</div>
        </div>
        <div className="r">
            <img src={pic3} alt="pic" />
            <div>Servers</div>
        </div>
        <div className="r">
            <img src={pic4} alt="pic" />
            <div>Laptops</div>
        </div>
        <div className="r">
            <img src={pic5} alt="pic" />
            <div>Desktops</div>
        </div>
      </div>
    </section>
  )
}
