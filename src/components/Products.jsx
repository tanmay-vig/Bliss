import './Products.css'
import Desktop from '../assets/desktop.jpg'
import Design from '../assets/dp.jpg'
import Seo from'../assets/seo.jpg'
import Wifi from '../assets/wifi routers.jpg'
import Servers from '../assets/server.jpeg'
import Marketing from '../assets/marketing.jpg'
import Mobile from '../assets/mobile sets.jpg'
import Laptop from '../assets/laptop.jpg'
export default function Products() {
  return (
    <>
    <h3 className="products">
      OUR PRODUCTS:
    </h3>
    <div className="flex flex-row">
      <div className="flex flex-col bg-slate-200">
        <img src={Desktop} alt="desktop"  height={200} width={300}/>
        <div>Desktop</div>
      </div>
      <div className="flex flex-col bg-slate-200">
        <img src={Laptop} alt="laptop"  height={200} width={300}/>
        <div>Laptop</div>
      </div>
      <div className="flex flex-col bg-slate-200">
        <img src={Wifi} alt="wifi routers" height={200} width={300} />
        <div>Wifi Routers</div>
      </div>
      <div className="flex flex-col bg-slate-200">
        <img src={Mobile} alt="Mobile Sets"  height={200} width={300}/>
        <div>Mobile Sets</div>
      </div>
    </div>
    <div className="flex flex-row">
      <div className="flex flex-col bg-slate-200">
        <img src={Seo} alt="seo"  height={200} width={300}/>
        <div>Seo</div>
      </div>
      <div className="flex flex-col bg-slate-200">
        <img src={Marketing} alt="marketing"  height={200} width={300}/>
        <div>Marketing</div>
      </div>
      <div className="flex flex-col bg-slate-200">
        <img src={Design} alt="design" height={200} width={300} />
        <div>Design</div>
      </div>
      <div className="flex flex-col">
        <img src={Servers} alt="servers"  height={200} width={300}/>
        <div>Servers</div>
      </div>
    </div>
    </>
  )
}
