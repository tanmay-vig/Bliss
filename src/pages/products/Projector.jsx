import "./common.css";
import pic1 from "./products/projector1.jpg";
import pic2 from "./products/projector2.jpg";
import pic3 from "./products/projector3.jpg";
export default function Projector() {
    return (
        <>
            <br />
            <h3 className="text-center m-5">
                Bliss Info Systems provides you with projectors for all your
                business needs at a reasonable rental price.
            </h3>
            <div className="p23">
                <div className="p11">
                    <img src={pic1} alt="pic1" /> <br />
                    <h4>1800 Lumens Projector With Slide & Laser Marker.</h4>
                    <p>DBPOWER T20, Everycom X7</p>
                    <a href="">Request Quote</a>
                </div>
                <div className="p11">
                    <img src={pic2} alt="pic2" /> <br />
                    <h4>2800 Lumens</h4>
                    <p>Epson VS340, Unic RD-806 HD</p>
                    <a href="">Request Quote</a>
                </div>
                <div className="p11">
                    <img src={pic3} alt="pic3" /> <br />
                    <h4>3200 Lumens</h4>
                    <p>BENQ MS506, Sony VPLDX140</p>
                    <a href="">Request Quote</a>
                </div>
            </div>
            <div className="p33">
                <h2>Projector</h2>
                Projectors are lightweight and compact and can easily be carried
                to your next presentation or meeting. They're also
                straightforward to set up, with just one cable to connect to
                your laptop or smartphone. The projectors come with all the
                cables you need, including a power cord and HDMI cable, so you
                don't have to worry about having any extra accessories lying
                around at the office when you need them most!
                <br /> <br />
                The projector has a high-resolution output of 1080p, so you can
                see every detail clearly on the screen no matter where it's
                positioned about your eyesight (even if it's far away from where
                you're sitting). The image quality is crisp and clear thanks to
                its powerful LED backlight system that produces vibrant colors
                without compromising brightness levels!
                <b>Uses</b> <br /> <br />
                Projectors are great for watching movies with friends because
                they have adjustable zoom and focus features that allow you to
                make sure everyone gets an equal view of the screen. The
                projector also has a USB port, so you can connect your laptop or
                computer directly to it without needing any other equipment like
                HDMI cables or adapters! <br /> <br />
                <b>Key Functionalities</b> <br /> <br />
                The projector has a contrast ratio of 2,500:1, which means that
                it can display deep blacks and bright whites with ease. It has a
                color brightness of 3,200 lumens CLO (Color Light Output), which
                means it has a high-quality picture that looks great in any
                lighting situation.
                <br /> <br />
                The white brightness of this projector is 3,200 ANSI lumens, and
                its color brightness is 1,900 lumens CLO. Both of these numbers
                are quite high for projectors in this price range.
                <br /> <br />
                This projector has an aspect ratio of 4:3 (XGA), which means it
                can display widescreen content without distorting or stretching
                it out of proportion. The resolution is also 1024x768, so you'll
                be able to watch 720p videos without any lag or distortion in
                the picture quality.
                <br /> <br />
                Furthermore, the maximum resolution of 1600x1200, and it comes
                with an image size of 203 cm - 508 cm. The projector is 7 cm x
                31 cm x 23 cm (HxWxD), and weighs 2.5 kg.
                <br /> <br />
                The projector uses a 210W UHP bulb that lasts for up to 3,000
                hours in standard mode or 7,000 hours in eco mode. It comes with
                1.3x manual zoom and manual focus lenses, which allow you to
                adjust the picture quality based on where you're using your
                projector. There are internal speakers that produce 1 Watt of
                mono sound each when watching video content on this device.
                <br /> <br />
                It also comes with a remote control so you can change settings
                without having to get up from where you're sitting or standing
                while watching content on your projector screen!
            </div>
        </>
    );
}
