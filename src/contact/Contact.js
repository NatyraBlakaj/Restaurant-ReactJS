import React, { Component } from 'react';
import './Contact.css';


 class Contact extends Component {


    render() {
        return (
            
            <div className="contact">

                <div className="contact-info">
                    <h2>VISIT OUR SHOP</h2>
                    <p><i className="fas fa-map-marker-alt"></i>Istog-Kosove</p>
                    <p><i className="fas fa-phone-alt"></i> 010-020-0340, 080-090-0660</p>
                    <p><i className="fas fa-envelope"></i> hello@company.com</p>
                </div>
                <div className="openingHours">
                    <h2>OPENING HOURS</h2>
                    <p><i className="far fa-clock"></i> 7:00 AM - 11:00 PM</p>
                    <p><i className="far fa-bell"></i> Monday to Friday and Sunday</p>
                    <p><i className="fas fa-exchange-alt"></i> Change Icons</p>
                </div>
                <div className="aboutMe">
                   <img src='/img/map.PNG'alt="foto"/>
                </div>
            </div>
        )
    }
}
export default Contact;