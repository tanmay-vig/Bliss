import Carousel from "react-bootstrap/Carousel";

import pic1 from "../Customer/c1.png";
import pic2 from "../Customer/c2.png";
import pic3 from "../Customer/c3.png";
import pic4 from "../Customer/c4.png";
import pic5 from "../Customer/c5.png";
import pic6 from "../Customer/c6.png";
import pic7 from "../Customer/c7.png";
import pic8 from "../Customer/c8.png";
import pic9 from "../Customer/c9.png";
import pic10 from "../Customer/c10.png";
import pic11 from "../Customer/c11.png";
import pic12 from "../Customer/c12.png";
import pic13 from "../Customer/c13.png";
import pic14 from "../Customer/c14.png";
import pic15 from "../Customer/c15.png";
import pic16 from "../Customer/c16.png";
import pic17 from "../Customer/c17.png";
import pic18 from "../Customer/c18.png";
import pic19 from "../Vendor/v1.png";
import pic20 from "../Vendor/v2.png";
import pic21 from "../Vendor/v3.png";
import pic22 from "../Vendor/v4.png";
import pic23 from "../Vendor/v5.png";
import pic24 from "../Vendor/v6.png";
import pic25 from "../Vendor/v7.png";
import pic26 from "../Vendor/v8.png";
import pic27 from "../Vendor/v9.png";
import pic28 from "../Vendor/v10.png";
import pic29 from "../Vendor/v11.png";
import pic30 from "../Vendor/v12.png";
import pic31 from "../Vendor/v13.png";
import pic32 from "../Vendor/v14.png";
import pic33 from "../Vendor/v15.png";
import pic34 from "../Vendor/v16.png";
import pic35 from "../Vendor/v17.png";
import "./clients.css";
export default function Clients() {
    return (
        <section className="clients">
            {" "}
            <br />
            <h2 className="text-center text-white">Our Clients</h2> <br />
            <div className="text-center rty3 text-white">
                Our mission is to provide superior products at reasonable prices
                backed by professional support. Here is a list of our esteemed
                clientele.
            </div>{" "}
            <br />
            <Carousel variant="dark">
                <Carousel.Item> <br />
                    <div className="client-image">
                        <img src={pic1} alt="pic2" />
                        <img src={pic2} alt="pic2" />
                        <img src={pic3} alt="pic2" />
                        <img src={pic4} alt="pic2" />
                        <img src={pic5} alt="pic2" />
                    </div> <br /> <br /> <br /> 
                </Carousel.Item>
                <Carousel.Item> <br />
                    <div className="client-image">
                        
                        
                        <img src={pic6} alt="pic2" />
                        <img src={pic7} alt="pic2" />
                        <img src={pic8} alt="pic2" />
                        <img src={pic9} alt="pic2" />
                        <img src={pic10} alt="pic2" />
                    </div> <br /> <br />  <br /> 
                </Carousel.Item>
                <Carousel.Item> <br />
                    <div className="client-image">
                    <img src={pic11} alt="pic2" />
                        <img src={pic12} alt="pic2" />
                        <img src={pic13} alt="pic2" />
                        <img src={pic14} alt="pic2" />
                        <img src={pic15} alt="pic2" />
                    </div> <br /> <br /> <br /> 
                </Carousel.Item>
                <Carousel.Item> <br />
                    <div className="client-image">
                    <img src={pic16} alt="pic2" />
                        <img src={pic17} alt="pic2" />
                        <img src={pic18} alt="pic2" />
                    
                    </div> <br /> <br /> <br /> 
                </Carousel.Item>
                
            </Carousel>
            <br /> <br />
            {/* Vendors */}
            <h2 className="text-center text-white">Our Vendors</h2> <br />
            <div className="text-center rty3 text-white">Our trusted vendors</div> <br />
            <Carousel variant="dark">
                <Carousel.Item> <br />
                    <div className="client-image">
                        <img src={pic19} alt="pic2" />
                        <img src={pic20} alt="pic2" />
                        <img src={pic21} alt="pic2" />
                        <img src={pic22} alt="pic2" />
                        <img src={pic23} alt="pic2" />
                    </div> <br /> <br />
                </Carousel.Item>
                <Carousel.Item> <br />
                    <div className="client-image">
                        
                        <img src={pic24} alt="pic2" />
                        <img src={pic25} alt="pic2" />
                        <img src={pic26} alt="pic2" />
                        <img src={pic27} alt="pic2" />
                        
                    </div> <br /> <br />
                </Carousel.Item>
                <Carousel.Item> <br />
                    <div className="client-image">
                    <img src={pic29} alt="pic2" />
                        <img src={pic30} alt="pic2" />
                        <img src={pic31} alt="pic2" />
                        <img src={pic32} alt="pic2" />
                        
                    </div> <br /> <br />
                </Carousel.Item>
                <Carousel.Item> <br />
                    <div className="client-image">
                    <img src={pic34} alt="pic2" />
                        <img src={pic35} alt="pic2" />
                        <img src={pic33} alt="pic2" />
                        <img src={pic28} alt="pic2" />
                    </div> <br /> <br />
                </Carousel.Item>
            </Carousel>
        </section>
    );
}
