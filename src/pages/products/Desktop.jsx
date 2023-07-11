
import './common.css'
import pic1 from './products/desktop1.jpg'
import pic2 from './products/desktop2.jpg'
import pic3 from './products/desktop3.jpg'
export default function desktop() {
  return (
    <>
      <div className="p23">
                <div className="p11">
                    <img src={pic1} alt="pic1" /> <br />
                    <h4>Core i7 Desktop
</h4>
                    <p>
                    Intel Core i7/4th Gen/16GB DDR3 RAM /1TB HDD /DVD/ 16″LED/DELL KBD/MOUSE

                    </p>
                    <a href="">Request Quote</a>
                </div>
                <div className="p11">
                    <img src={pic2} alt="pic2" /> <br />
                    <h4>Core i3 Desktop
</h4>
                    <p>Intel Core i3/8GB RAM/500GB-1TB HDD/LAN/16”LED/DELL KBD/MOUSE

                    </p>
                    <a href="">Request Quote</a>
                </div>
                <div className="p11">
                    <img src={pic3} alt="pic3" /> <br />
                    <h4>Core i5 Desktop
</h4>
                    <p>Intel Core i5/ 3rd Gen/4GB RAM/500GB HDD/LAN/16”LED/DELL KBD/MOUSE
</p>
                    <a href="">Request Quote</a>
                </div>
            </div>
    </>
  )
}
