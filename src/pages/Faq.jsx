import Accordion from "react-bootstrap/Accordion";
import './faq.css'
export default function Faq() {
    return (
        <>
            {" "}
            <br />
            <h2 className="text-center">Frequently Asked Questions</h2>
            <div className="text-center">
                Get a question or a doubt? We've got the answer right here.
            </div>
            <Accordion defaultActiveKey={["0"]} alwaysOpen className="acc"> 
                <Accordion.Item eventKey="0">
                    <Accordion.Header>General Information</Accordion.Header>
                    <Accordion.Body>
                        <b>Q: What Is Bliss Info Systems?</b> <br />
                        A: Bliss Info Systems is one of the largest providers of
                        comprehensive rental solutions in the country for all
                        your business needs. Our varied supply of IT equipment
                        has made us an established name in the Indian rental
                        industry. Our mission is to provide superior products at
                        affordable rentals backed by best-in-class support. The
                        equipment(s) offered by us include Laptops, Desktops,
                         etc. <br />  <br />
                        <b>
                         Q: Which city do you provide your 
                        service in? 
                        </b> <br />
                        A: We are headquartered in Delhi with 8
                        branches located strategically across the country to
                        provide delivery and other services on a PAN India
                        basis.  <br /> <br />
                        <b>

                        Q: How can I start renting?
                        </b> <br />
                        A: If you need an equipment on rent, you can browse our categories and
                        connect with our customer care. You would be asked to
                        select the equipment(s), choose the duration for which
                        you want to rent the equipment, the payment and delivery
                        option and Bliss Info Systems will deliver as well as collect
                        the equipment(s). <br /> <br />
                        <b>
                        Q: Do I need to provide you any
                        documents for verification in order to process my order?
                        </b> <br />
                        A: Yes, you would be asked for the documents and the
                        number/type of documents depends upon several factors
                        such as location, order value etc. We try to be as
                        flexible as possible in this regard and our
                        representative will be there to guide you through the
                        whole process. <br /> <br />
                        <b>
                        Q: Is there a minimum tenure for which I
                        must rent out an equipment?
                        </b> <br />
                         A: No, there is no minimum
                        tenure and you can rent out an equipment for any
                        duration as per your requirement. <br /> <br />
                        <b>

                         Q: Why do I have to
                        pay security deposit for renting an equipment?
                        </b> <br />
                         A: As the
                        name suggests, the Security Deposit is just for the
                        security of the equipment and it is returned back as
                        soon as we receive the equipment in proper condition
                        from the client at the end of the tenure.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Delivery & Installation</Accordion.Header>
                    <Accordion.Body>
                        <b>Q: What is the approximate time for delivery?</b> <br />
                        A: We have a huge network all over India in order to facilitate you with speedy deliveries. Depending upon the location, the delivery time may vary from 1 – 7 business days. <br />  <br />
                        <b>
                        Q: Who will deliver and set up the equipment(s) for me?
                        </b> <br />
                        A: Bliss Info Systems will deliver the equipment(s) to you irrespective of your location. In case you require us to setup the equipment(s) as well then that may be chargeable.  <br /> <br />
                        <b>

                        Q: I want someone to be available all time with the equipment for setup and maintenance. Is that possible?
                        </b> <br />
                        A: As soon as your order is confirmed, you will be assigned a “Relationship Manager (RM)”. All your queries regarding delivery, setup, maintenance etc. will be solved by your RM. <br /> <br />
                        <b>
                        Q: I liked the equipment I rented. Can I buy it?
                        </b> <br />
                        A: The equipment may or may not be available for the same. You would be required to connect with the RM to get the correct status of the equipment. <br /> <br />
                        
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Service & Maintence</Accordion.Header>
                    <Accordion.Body>
                        <b>Q: I want to retain the equipment(s) that are being returned. What do I do?</b> <br />
                        A: If you wish to extend the rental tenure for the equipment(s) you rented out, then all you need to do is to inform us a week prior to the completion of the tenure and we will be more than happy to serve you again. <br />  <br />
                        <b>
                        Q: What if the condition of the equipment received is not satisfactory?
                        </b> <br />
                        A: The comfort and preference of our consumers stand first to us in any circumstances. If, at the time of the delivery, you feel dissatisfied by the equipment delivered to you, you need not worry. All you need to do is inform your RM and the equipment(s) will be replaced. <br /> <br />
                        <b>

                        Q: How can I raise a request for repair or replacement?
                        </b> <br />
                        A: Our helpline is available to provide assistance on a 24x7 basis; our engineers are at your service and would do the needful. <br /> <br />
                        
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Partner with Bliss Info Systems</Accordion.Header>
                    <Accordion.Body>
                        <b>Q: I have a rental business. How can I work with Bliss Info Systems?</b> <br />
                        A: For all business queries, you can send us an email on 
                        abc@mail.com and we will get in touch with you within the next 2 – 3 business days.<br />  <br />
                        
                    </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
        </>
    );
}
