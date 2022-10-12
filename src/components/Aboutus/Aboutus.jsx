import React from "react";
import './Aboutus.css';

function Aboutus(){
    return(
        <>
        <div className="aboutus-image-container">
            <div className="ab-image-container">
                <img src={require('../photos/aboutus.png')} className='img-about'/>
            </div>
            <div className="aboutus-text">
                <h2 className="aboutus-heading">About Us</h2>
                <p>Stellence is created with the aim of collecting advanced pharmaceutical technologies and complex chemistry, make them scalable and generate life saving medicines that globally are not being manufactured in the amount needed. Stellence has products using high temperature high pressure reactions, low temperature chemistry, genomics technologies, solid phase and solution phase peptide and amino acid chemistry, iodine based chemistry. Based on these expertise the company has developed multiple products for the pharma industry.</p>
            </div>
        </div>
        </>
    )
}

export default Aboutus