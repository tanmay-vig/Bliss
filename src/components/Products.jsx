import "./Products.css";
import pic1 from "../assets/trend1.jpg";
import pic2 from "../assets/trend2.jpg";
import pic3 from "../assets/trend3.jpg";
import pic4 from "../assets/trend4.jpg";
import pic5 from "../assets/trend5.jpg";
import pic6 from "../assets/trend6.jpg";
import pic7 from "../assets/trend7.jpg";
import pic8 from "../assets/trend8.jpg";
export default function Products() {
    return (
        <section className="products-section"> <br />
            <h1 className=" text-center m-5 font-extrabold text-white">Trending Products</h1>
            <div className="trend-flex">
                <div className="trend">
                    <img src={pic1} alt="pic" />
                    <h4>Core i5 Desktop</h4>
                    <p>
                        Intel Core i5/ 3rd Gen/4GB RAM/500GB HDD/LAN/16”LED/DELL
                        KBD/MOUSE
                    </p>
                    <a href="">Request a Quote</a>
                </div>

                <div className="trend">
                    <img src={pic2} alt="pic" />
                    <h4>Core i5 Laptop Ram 8GB</h4>
                    <p>
                        Intel Core i5 / Ram 8GB/ Hard Drive 256GB SSD/ Web Cam /
                        Bluetooth/ Wi-Fi /14.1" Screen Size
                    </p>
                    <a href="">Request a Quote</a>
                </div>

                <div className="trend">
                    <img src={pic3} alt="pic" />
                    <h4>Core i5 All In One 23.8 Inch</h4>
                    <p>
                        AIO 5i 2020/ 23.8-inch/10th Gen/ Intel Core i5/8GB/512GB
                        SSD + 1TB
                    </p>
                    <a href="">Request a Quote</a>
                </div>

                <div className="trend">
                    <img src={pic4} alt="pic" />
                    <h4>Core i7 Desktop</h4>
                    <p>
                        Intel Core i7/4th Gen/16GB DDR3 RAM /1TB HDD /DVD/
                        16″LED/DELL KBD/MOUSE
                    </p>
                    <a href="">Request a Quote</a>
                </div>

                <div className="trend">
                    <img src={pic5} alt="pic" />
                    <h4>Core i5 Laptop Ram 4GB</h4>
                    <p>
                        Intel Core i5 / Ram 4GB/ Hard Drive 320GB/ Web Cam /
                        Bluetooth/ Wi-Fi /14.1" Screen Size
                    </p>
                    <a href="">Request a Quote</a>
                </div>

                <div className="trend">
                    <img src={pic6} alt="pic" />
                    <h4>Core i7 Laptop Ram 16GB</h4>
                    <p>
                        Intel Core i7 / Ram 16GB / Hard Drive 320GB SATA / Web
                        Cam / Bluetooth/ Wi-Fi /15.4" Screen Size/Dos
                    </p>
                    <a href="">Request a Quote</a>
                </div>

                <div className="trend">
                    <img src={pic7} alt="pic" />
                    <h4>Apple MacBook Air</h4>
                    <p>13-inch Laptop (Core i5/8GB/128GB SSD/MacOS)</p>
                    <a href="">Request a Quote</a>
                </div>

                <div className="trend">
                    <img src={pic8} alt="pic" />
                    <h4>Apple MacBook Pro</h4>
                    <p>
                        15-inch Laptop (Core i7/16GB/512GB/Mac OS/Integrated
                        Graphics)
                    </p>
                    <a href="">Request a Quote</a>
                </div>
            </div>
             <br />
        </section>
    );
}
