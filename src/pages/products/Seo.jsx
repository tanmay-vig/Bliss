import './common.css'
import pic1 from './products/seo1.jpg'
import pic2 from './products/seo2.jpg'

export default function Seo() {
  return (
    <> <br />
      <h2 className="text-center">We provide the best Seo and Marketing Solutions to the Customers </h2>
      <div className="p23">
                <div className="p11">
                    <img src={pic1} alt="pic1" /> <br />
                    <h4>Marketing Package</h4>
                    <p>We offer Digital/offline, Marketing & Campaigns</p>
                    <a href="">Request Quote</a> <br />
                </div>
                <div className="p11">
                    <img src={pic2} alt="pic2" /> <br />
                    <h4>Seo</h4>
                    <p>Instagram , Facebook etc.</p>
                    <a href="">Request Quote</a> <br />
                </div>
                
            </div>
    </>
  )
}
