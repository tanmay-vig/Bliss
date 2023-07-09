
import pic1 from '../assets2/clients1.jpeg'
import pic2 from '../assets2/clients2.jpeg'
import './clients.css'
export default function Clients() {
  return (
    <section className='clients'> <br />
      <h2 className="text-center">Our Clientele</h2> <br />
      <div className="text-center">Our mission is to provide superior products at reasonable 
      prices backed by professional support. Here is a list of our esteemed clientele.</div> <br />
      <div className='client-image'>
        <img src={pic1} alt="pic1" />
        <img src={pic2} alt="pic2"  />
      </div>
    </section>
  )
}
