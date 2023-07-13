import pic1 from "../assets/logo.jpg";
import "./footer.css";
import { Link } from "react-router-dom";
import pic2 from '../assets/location.png'
export default function Footer() {
    return (
        <>
            {" "}
            <br />
            <section className="footer">
                {" "}
                <br /> <br />
                <div className="footer-container">
                    <div className="f">
                      <div>
                        <img src={pic1} alt="pic1" width={150} height={100} style={{marginRight:10}}/>
                        
                        <a href="https://www.google.com/maps/place/a,+51,+Block+A,+Sector+57,+Noida,+Uttar+Pradesh+201301/@28.602051,77.354126,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce512a05a65ff:0xb136f3f808e4190b!8m2!3d28.602051!4d77.354126?entry=ttu">
                          <img src={pic2} alt="pic" width={150} height={100}/>
                        </a>
                      </div>
                        <div className="g">
                            A-51, Block A<br /> Sector 57, Noida, Uttar Pradesh
                            201301
                        </div>
                        
                    </div>
                    <div className="f">
                        <div className="o">Our Products</div>
                        <div>
                            <div className="g">&gt; Desktops</div>
                            <div className="g">&gt; Laptops</div>
                            <div className="g">&gt; Mobile Sets</div>
                            <div className="g">&gt; Servers</div>
                        </div>
                    </div>
                    <div className="f">
                        <div className="o">Quick Links</div>

                        <Link to="/csr" className="g">
                            {" "}
                            &gt; CSR
                        </Link>

                        {/* <Link to="/blog" className='g'> &gt;	Blog
              </Link> */}

                        <Link to="/faq" className="g">
                            {" "}
                            &gt; FAQ
                        </Link>

                        <Link to="/sustainibilty" className="g">
                            {" "}
                            &gt; Sustainability
                        </Link>

                        <Link to="/terms" className="g">
                            {" "}
                            &gt; Terms of Use
                        </Link>

                        <Link to="/policies" className="g">
                            {" "}
                            &gt; Policies
                        </Link>
                    </div>

                    <div className="f">
                        <div className="o">Get in Touch</div>
                        <div className="g">
                            <i className="fa-solid fa-phone">+91999999999</i>
                        </div>
                        <div className="g">
                            <i className="fa-solid fa-envelope">abc@mail</i>
                        </div>
                        <div className="social">
                          <a href="" className="fa-brands fa-instagram"></a>
                          <a href="" className="fa-brands fa-linkedin"></a>
                          <a href="" className="fa-brands fa-facebook"></a>
                          <a href="" className="fa-brands fa-twitter"></a>
                        </div>
                    </div>
                </div>
                <hr className="text-white" />
                <div className="text-center text-white">
                    © Copyright 2023 Bliss Info Systems. All rights reserved.
                </div>{" "}
                <br />
            </section>
        </>
    );
}
