
import './common.css'
import pic1 from './products/all1.jpg'
import pic2 from './products/all2.jpg'
import pic3 from './products/all3.jpg'
export default function All() {
  return (
    <> <br /> <br />
      <div className="p23">
        <div className="p11">
          <img src={pic1} alt="pic1" />
          <h4>Core i3 All in one</h4>
          <p>Intel Core i3 / Ram 4GB DDR 3 / Hard Drive 250GB SATA/ Web Cam / Bluetooth/ Wi-Fi /14.1" Screen Size</p>
          <a href=''>Request Quote</a>
        </div>
        <div className="p11">
          <img src={pic1} alt="pic1" />
          <h4>Core i3 All in one</h4>
          <p>Intel Core i3 / Ram 4GB DDR 3 / Hard Drive 250GB SATA/ Web Cam / Bluetooth/ Wi-Fi /14.1" Screen Size</p>
          <a href=''>Request Quote</a>
        </div>
        <div className="p11">
          <img src={pic1} alt="pic1" />
          <h4>Core i3 All in one</h4>
          <p>Intel Core i3 / Ram 4GB DDR 3 / Hard Drive 250GB SATA/ Web Cam / Bluetooth/ Wi-Fi /14.1" Screen Size</p>
          <a href=''>Request Quote</a>
        </div>
      </div>
    </>
  )
}
