import "./common.css";
import pic1 from "./products/cctv1.jpg";
import pic2 from "./products/cctv2.jpg";
import pic3 from "./products/cctv3.jpg";
import pic4 from "./products/cctv4.jpg";
import pic5 from "./products/cctv5.jpg";
export default function Cctv() {
    return (
        <> <br />
            <div className="p23">
                <div className="p11">
                    <img src={pic1} alt="pic1" /> <br />
                    <h4>Dome CCTV Camera</h4>
                    <p>2MP 1080P Compact IP Night Vision Outdoor Dome Camera</p>
                    <a href="">Request Quote</a>
                </div>
                <div className="p11">
                    <img src={pic2} alt="pic2" /> <br />
                    <h4>Bullet CCTV Camera</h4>
                    <p>
                        2MP 1080P Compact IP Night Vision Outdoor Bullet Camera
                    </p>
                    <a href="">Request Quote</a>
                </div>
                <div className="p11">
                    <img src={pic3} alt="pic3" /> <br />
                    <h4>PTZ CCTV Camera</h4>
                    <p>
                        Ptz Speed Dome Camera 720P HD 1/3" HD CMOS sensor
                        1280*720, 23X Optical Zoom, RS-485 communication
                        diagnosis
                    </p>
                    <a href="">Request Quote</a>
                </div>
            </div>
            {/* contents */}
            <div className="p33">
                <h2>Product Details:</h2>
                <b>PTZ CCTV Camera <br /> <br />
                Ptz Speed Dome Camera 720P HD 1/3" HD CMOS sensor 1280*720, 23X Optical Zoom, RS-485 communication diagnosis
<br />
</b>
            </div>
            {/* You may also like */}
            <h2 className="text-center">You may also Like</h2>
            <div className="p23">
                <div className="p11">
                    <img src={pic4} alt="pic1" /> <br />
                    <h4>Bullet CCTV Camera</h4>
                    <p>
                        2MP 1080P Compact IP Night Vision Outdoor Bullet Camera
                    </p>
                    <a href="">Request Quote</a>
                </div>
                <div className="p11">
                    <img src={pic5} alt="pic1" /> <br />
                    <h4>Dome CCTV Camera</h4>
                    <p>2MP 1080P Compact IP Night Vision Outdoor Dome Camera</p>
                    <a href="">Request Quote</a>
                </div>
            </div>
        </>
    );
}
