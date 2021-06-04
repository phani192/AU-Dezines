import React, { Component } from 'react';
import "./css/Footer.css";
class Footer extends Component {

    render() {
        return (<footer>
            <div>
                <div className="Fheading1">Our Services</div>
                <div>Order</div>
                <div>Returns</div>
                <div>Delivery</div>
                <div>Size Guide</div>
            </div>

            <div>
                <div className="Fheading2">Offers</div>
                <div>Mens</div>
                <div>Women</div>
                <div>Boys</div>
                <div>Girls</div>
            </div>
            <div>
                <div className="Fheading3">The Company</div>

                <div >About US</div>
                <div>Our Responsibility</div>
                <div>Contact Us</div>
            </div
            >
        </footer >
        )


    }
}

export default Footer;