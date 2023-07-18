import "./common.css";
import pic1 from "./products/rfid1.png";
import pic2 from "./products/rfid2.png";
import pic3 from "./products/rfid3.png";
import pic4 from "./products/rfid4.png";
import pic5 from "./products/rfid5.png";
import pic6 from "./products/rfid6.png";
import pic7 from "./products/rfid7.png";
import pic8 from "./products/rfid8.png";
import pic9 from "./products/rfid9.png";

export default function Rfid() {
    return (
        <>
            <br />
            <h3 className="text-center m-5">
                Rfid Sensors That satisfies all the needs of the firm
            </h3>
            <div className="p23">
                <div className="p11">
                    <img src={pic1} alt="pic1" /> <br />
                    <h4> Rfid Printer</h4>
                    <p>
                        Can be integrated with existing software <br /> Uses Wax
                        resin ribbon for bright printing <br /> Capable of
                        printing more than 10000 tags a day
                    </p>
                    <a href="">Request Quote</a>
                </div>
                <div className="p11">
                    <img src={pic2} alt="pic2" /> <br />
                    <h4>
                        <b>Rfid Jewellery Tags</b>
                    </h4>
                    <p>
                        Reusable Tags and One-time use tags <br />
                        No Sight for reading the tags <br />
                        Support international standards and protocols
                    </p>
                    <a href="">Request Quote</a>
                </div>
                <div className="p11">
                    <img src={pic3} alt="pic3" /> <br />
                    <h4>
                        <b>Rfid Handheld Devices</b>
                    </h4>
                    <p>
                        Faster inventory <br />
                        Alerts during inventory <br />
                        Quick Search for missing items <br />
                        Integrated or Standalone system <br />
                        Easy to carry <br />
                        Longer battery life <br />
                        Inbuilt Camera, Sim slot , external display
                    </p>
                    <a href="">Request Quote</a>
                </div>
                <div className="p11">
                    <img src={pic4} alt="pic1" /> <br />
                    <h4>
                        {" "}
                        <b> Smart Rfid Tray </b>
                    </h4>
                    <p>
                        Data Analytics <br />
                        Provides estimation of one or more products at once{" "}
                        <br />
                        Integration with any system
                    </p>
                    <a href="">Request Quote</a>
                </div>
            </div>
            {/* Advanced Rfid */}
            <br />
            <h2 className="text-center">Advanced Rfid Products:</h2>
            <div className="p23">
                <div className="p11">
                    <img src={pic5} alt="pic2" /> <br />
                    <h4><b>RFID Inventory Tray</b></h4>
                    <p>
                    Stock Control Management <br />
 Scans all the items in the tray at once  <br />
when kept on top of it <br />
 No Sight for reading the tags <br />
 Fastens the inventory checking <br />
 100 % accurate and safe <br />
 Focused reading on particular items

                    </p>
                    <a href="">Request Quote</a>
                </div>
                <div className="p11">
                    <img src={pic6} alt="pic3" /> <br />
                    <h4><b>
                    Jewel Tray Tracking System</b></h4>
                    <p>
                    Tray Wise Inventory Management <br />
 Provides Report at end of the day <br />
 Alerts if any tray not entering the safe <br />
 Quick Search for missing items <br />
 Integrated or Standalone system <br />
 Easy to carry <br />
 Monitors the staff who handles 
the tray

                    </p>
                    <a href="">Request Quote</a>
                </div>
                <div className="p11">
                    <img src={pic7} alt="pic1" /> <br />
                    <h4> <b>
                    AM + RFID Gate System</b></h4>
                    <p>
                    Security Management <br />
 Staff live tracking <br />
 Integrated with CCTV <br />
 Can be installed with any 
existing EAS Gate

                    </p>
                    <a href="">Request Quote</a>
                </div>
            </div>
            <div className="p23">
                <div className="p11">
                    <img src={pic8} alt="pic2" /> <br />
                    <h4><b>
                    2CQR Intelligent Weighing 
with Inventory Tray</b></h4>
                    <p>
                    2CQR Integrated with top most jewel 
weighing scale “Mettler Toledo” <br />
 RFID and Weighing scale are integrated to 
provide the accurate inventory with weight of 
the jewel. <b></b>
 Compares the Current weight with actual 
jewel weight and provides 100% accurate results 
immediately <br />
 Simple and Easy Interface <br />
 Detailed report of each and every item  <br />
 

                    </p>
                    <a href="">Request Quote</a>
                </div>
                <div className="p11">
                    <img src={pic9} alt="pic3" /> <br />
                    <h4>
                        <b>
                        Attendance Management:
Biometric / RFID Card
                        </b>
                    </h4>
                    <p>
                    Live Tracking of Employees
 Detailed Reports <br />
 Day Report / Monthly Report <br />
 Branch Wise Statistics

                    </p>
                    <a href="">Request Quote</a>
                </div>
            </div>
        </>
    );
}
