import "./common.css";
import pic1 from "./products/server1.jpg";
import pic2 from "./products/server2.jpg";
import pic3 from "./products/server3.jpg";
export default function Server() {
    return (
        <>
            {" "}
            <br />
            {/* Products */}
            <div className="p23">
                <div className="p11">
                    <img src={pic1} alt="pic1" /> <br />
                    <h4>Rack Mount Server</h4>
                    <p>
                        HP Proliant: Dl320e G8, Dl180 G9, Dl360 G9, Dl60 G9,
                        Dl380 G5; DELL: R430, R430, R430, R620, R620, R620; IBM:
                        System X3650 M4
                    </p>
                    <a href="">Request Quote</a>
                </div>
                <div className="p11">
                    <img src={pic2} alt="pic2" /> <br />
                    <h4>Tower Server</h4>
                    <p>
                        HP Proliant: ML110 G7, Ml150 G9; DELL PowerEdge: T430,
                        T420, T620
                    </p>
                    <a href="">Request Quote</a>
                </div>
                <div className="p11">
                    <img src={pic3} alt="pic3" /> <br />
                    <h4>Blade Server</h4>
                    <p>HP Blade System c7000 Enclosure; Dell Power Edge M905</p>
                    <a href="">Request Quote</a>
                </div>
            </div>{" "}
            <br />
            {/* Content */}
            <div className="p33">
                <h2>Get Server on Rent from Get It Rent</h2>
                Today, the majority of work is done on computers, and data is
                shared across and kept on several servers. Rack servers, blade
                servers, and tower servers are the three major types of servers
                utilized in modern data centers. These three server kinds have
                different effects on data center efficiency, space, and
                scalability. Owning a server necessitates a considerable
                financial investment as well as a significant time commitment.
                As a result, rather than purchasing and installing a server at
                your home or workplace, you can save money by renting one from
                Bliss Info Systems.
                <h3>The different types of servers</h3>
                <br />
                Bliss Info Systems is the one-stop shop for renting out
                All-in-one PC at the best price. We specialize in offering
                businesses the computers, laptops and even servers they require
                for their IT infrastructure. <br /> <br />
                <b>Rack Server</b> <br /> <br />
                A rack server is a server that is housed within a rack. Rack
                servers are general-purpose servers that can support a wide
                range of applications and computer infrastructure. To minimize
                data center floor space, the racks stack servers vertically. The
                more equipment administrators can store vertically, the more
                equipment they can store. Rack-mounted servers or other
                computing devices make excellent use of data center space. Rack
                servers are easily expandable in terms of memory, storage, and
                processors. Furthermore, if administrators have shared or
                clustered server data for redundancy, hot-swapping rack servers
                is physically straightforward.
                <br />
                You may browse through Bliss Info System's inventory at your
                convenience, making it simple to find what you need without
                wasting time and saving you from having to travel from store to
                store in hunt of the perfect All-in-one PCs. <br /> <br />
                <b>Blade Server</b> <br /> <br />A blade server is a server
                enclosure that houses many server blades, which are modular
                circuit boards. The majority of blade servers are reduced to
                CPUs, impact on the status, and memory. Some models include
                internal storage discs. Other components, like switches,
                terminals, and power connectors, are shared via the chassis.
                Enclosures often meet rack unit dimensions, allowing IT to save
                space. Administrators can cluster blades or operate and manage
                each as a single server, such as allocating programmes and
                end-users to specific blades. Their modular architecture allows
                for hot exchanges. Blades include little external handles that
                make it easy to remove or replace them. <br /> <br />
                <b>Tower Server</b> <br /> <br />
                Tower servers are standalone servers with minimal elements and
                software that allows for customization for unique mission
                requirements. It lacks a premium graphics card, premium RAM, and
                other components while allowing customers to configure it as an
                overall server, web server, or other sorts of network servers.
                Tower servers, as opposed to rack or blade servers, are
                integrated desktop PCs that take up a lot of area. As a result,
                they have a higher CPU capability, faster read memory, are
                utilized to manage multi-user requests, and provide various
                services such as DHCP or DNS. <br /> <br />
                <h3>Why should you rent a server from Get It Rent?</h3>
                We offer rental servers to all based on your business
                requirements, whether you need a small server to set up a single
                enterprise app or a server with high specs to host several
                enterprise apps. We have very reasonable monthly rental rates
                and practical payment methods. Owing to its one-day delivery and
                focus on providing solutions rather than just being a supplier
                of goods, Bliss Info Systems is the best IT equipment rent option for
                every business. So call us right now to get a server on rent.
            </div>
        </>
    );
}
