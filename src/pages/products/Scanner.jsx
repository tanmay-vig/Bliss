import "./common.css";
import pic1 from "./products/scanner1.jpg";
import pic2 from "./products/scanner2.jpg";
import pic3 from "./products/scanner3.jpg";
export default function Scanner() {
    return (
        <>
            <br />
            <h3 className="text-center m-5">
                We offer multiple scanner options such as the network scanner,
                2D barcode scanner, and flatbed scanner for a flexible tenure
                and at the best rental price.
            </h3>
            <div className="p23">
                <div className="p11">
                    <img src={pic1} alt="pic1" /> <br />
                    <h4>Flatbed Scanner</h4>
                    <p>HP SJ 2400, 3970; Canon 220, 120</p>
                    <a href="">Request Quote</a>
                </div>
                <div className="p11">
                    <img src={pic2} alt="pic2" /> <br />
                    <h4>Network Scanner</h4>
                    <p>HP SJ 4500FN1, 7650n</p>
                    <a href="">Request Quote</a>
                </div>
                <div className="p11">
                    <img src={pic3} alt="pic3" /> <br />
                    <h4>2D Barcode Scanner</h4>
                    <p>2D BARCODE SCANNER</p>
                    <a href="">Request Quote</a>
                </div>
            </div>
            <div className="p33">
                <h2>Go Paper-free With Scanners From Get It Rent</h2> <br />
                Is it time to make some room for storage at your workplace?
                Well, a scanner can help you optimize your paper usage.
                <br />
                A document scanner is a tool that turns paper-based text or
                documents into digital data.
                <br />
                Converting information from printed papers to digital data
                stores, such as the hard drives of a personal computer or cloud
                storage, takes less time and effort when using document
                scanners. Using scanners is an environmentally-friendly and
                convenient way to document massive loads of information.
                <br />
                <h3>Advantages Of A Scanners In A Workplace</h3>
                <b>Restoration of images</b> <br /> <br />
                Scanners are now a crucial tool for picture restoration
                professionals. The photo may be severely degraded or even in
                pieces, but the scanning process is gentle on it. A graphics
                specialist can use Photoshop and other image-editing software to
                repair tears, creases, and other damage to old images once they
                have been scanned into digital form.
                <br /> <br />
                <b>Easy communication</b> <br /> <br />A scanned document can be
                sent by email more quickly than a paper copy can be by regular
                mail or fax. Emailing electronic documents makes it easier to
                communicate quickly, and due to the popularity of smartphones
                and tablets, the recipient doesn't need a computer to view the
                files. Sending a document to a group is very effective because
                multiple people can receive the same message. <br /> <br />
                <b>Capture, Edit, and Search for Text</b> <br /> <br />
                Typically, a scanner is used to convert paper documents into
                visual images or PDF files. However, a software process known as
                optical character recognition goes a step further and converts
                scanned documents into text.
                <br />
                When the paper is in text form, you may search for certain words
                using a word processor, Adobe Acrobat, or other applications,
                saving a tonne of time compared to manually flipping through the
                pages. <br /> <br />
                <b>Commercial Data Capture</b> <br /> <br />
                Specialized scanners can save you time by automatically entering
                contact information from business cards and other forms into
                your computer's contact list. Many of these scanners are small
                and portable, so you can bring them with you to events like
                conventions and meetings where you know you'll be meeting plenty
                of people.
                <h2>Why Rent A Scanner From Bliss Info Systems?</h2>
                <ul>
                    <li>
                        The rental scanners from Get It Rent include flatbed
                        scanners, network scanners, and 2D barcode scanners.
                    </li>
                    <li>
                        We are your one-stop solution for all your scanning and
                        document imaging needs, offering professional PAN India
                        service, affordable rental prices, and leading brands.
                    </li>
                    <li>
                        Our professionals work hard to give our clients the best
                        service possible, and we know that meeting their needs
                        comes first.
                    </li>
                    <li>
                        Renting a scanner from Get It Rent can give you the most
                        appropriate equipment to digitize paper data, whether
                        you need to scan invoices, purchase orders, medical
                        information, employee files, contracts, or more.
                    </li>
                    <li>You can return the equipment after use.</li>
                </ul>
                Feel free to contact us right away to rent a scanner today!
            </div>
        </>
    );
}
