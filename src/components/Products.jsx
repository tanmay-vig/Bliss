import "./Products.css";
import Desktop from "../assets/desktop.jpg";
import Design from "../assets/dp.jpg";
import Seo from "../assets/seo.jpg";
import Wifi from "../assets/wifi routers.jpg";
import Servers from "../assets/server.jpeg";
import Marketing from "../assets/marketing.jpg";
import Mobile from "../assets/mobile sets.jpg";
import Laptop from "../assets/laptop.jpg";
export default function Products() {
    return (
        <section className="products-section">
            <h2 className=" text-center m-5">OUR PRODUCTS:</h2>
            <div className="container">
                <div className="products">
                    <img src={Desktop} alt="desktop" />
                    <h4 className="text-center">Desktop</h4>
                </div>
                <div className="products">
                    <img src={Laptop} alt="laptop" />
                    <h4 className="text-center">Laptop</h4>
                </div>
                <div className="products">
                <img src={Wifi} alt="wifi-router" />
                <h4 className="text-center">Wifi Routers</h4>
            </div>
            <div className="products">
                <img src={Mobile} alt="Mobile" />
                <h4 className="text-center">Mobile Sets</h4>
            </div>
            </div>
            <div className="container">
            <div className="products">
                <img src={Design} alt="design" />
                <h4 className="text-center">Design Package</h4>
            </div>
            <div className="products">
                <img src={Marketing} alt="Marketing" />
                <h4 className="text-center">Marketing</h4>
            </div>
            <div className="products">
                <img src={Seo} alt="Seo" />
                <h4 className="text-center">Seo</h4>
            </div>
            <div className="products">
                <img src={Servers} alt="Servers" />
                <h4 className="text-center">Servers</h4>
            </div>
            </div>
        </section>
    );
}
