import React, { useRef } from 'react';
import './ContactUs.css';
import Home from "./Map";
import {FaLinkedin} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_axz7jsg', 'template_b24y4cf', form.current, 'nTRk8fvlhfvewBMH8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };

    return(
        <>
        <div className="contactus-newsletter-container">
            <div className="contactus-map-container">
                
                <div className="contactus-container">
                    <h4>Contact Us:</h4>

                    <h6>We are happy to assist you, please reach out to us.</h6>

                    <table>
                    <tr>
                        <td>Lakshmi Bhaskar</td>
                        <td>+65 97230431</td>
                        <td className="table-email">lakshmi.b@stellencepharmscience.com</td>
                    </tr>
                    <tr>
                        <td>Sabil T </td>
                        <td>+91 99002 51568</td>
                        <td className="table-email">sabil.t@stellencepharmscience.com</td>
                    </tr>
                    <tr>
                        <td>Prasanthi M </td>
                        <td>+91  87623 56777</td>
                        <td className="table-email">Prasanthi.m@stellencepharmscience.com</td>
                    </tr>
                    </table>

                    📞 <b>Phone: </b>
                    +91 81104 13800<br/><br/>
                                            
                    <b>📧Email: </b>
                    info@stellencepharmscience.com<br/><br/>

                    <b> Postal Address:</b><br/>
                    #456, Road No.3, Industrial Area, Jigani, Bangalore South 562 106
                    <br/><br/>
                    
                </div>
                <div className="map-container">
                    <Home/>
                </div>

            </div>
            <div className="newsletter-container">
                <div>
                <h5>Subscribe to our Newsletter</h5>
                </div>
                <div className="form">
                <form ref={form} onSubmit={sendEmail}>
                
                <input type="text" id="name" name="user_name"
                placeholder="Enter Your Name" className="form-elements"/><br/>
                <input type="email" id="mail" name="user_email"
                placeholder="Enter a valid email address" className="form-elements"/><br/>
                <textarea id="message" name="message" rows="4" cols="50"
                placeholder="Enter your message" className="form-elements"></textarea><br/>
                <input type="submit" value="Send" className="button-sub"/>
                </form>
                </div>
            </div>
            <div className="linkedin-container">
                Follow us on <a href="https://www.linkedin.com/company/stellence-pharmscience-pvt-ltd/"><FaLinkedin/></a>
                
            </div>
        </div>
        </>
    )
}


export default ContactUs;