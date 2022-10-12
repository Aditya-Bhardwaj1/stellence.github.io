import React from "react";
import './Diagnostics.css';

function Diagnostics(){
    return(
        <>
        <div className="diag-heading-bg">
            <h2> RT-PCR based Diagnostics</h2> 
        </div>

        <div className="diag-text">
            <p>
            <i>Svashmi Genotech Pvt. Ltd;</i>  ​is an innovation-driven diagnostic solutions company with a passion for research and development of genomics-based kits to address unmet needs in the detection of infectious diseases. Svashmi is promoted by Stellence Pharmscience. Pvt. Ltd., a 15-year-old Active Pharmaceuticals Ingredient (API) and Intermediates manufacturer which offers quality infrastructure including Regulatory and Quality systems.
            </p>
        </div>
        <div className="genome-heading-image">
            <h4>Why Choose Genome Testing?</h4>
            <div className="genome-img">
                <img src={require('../photos/genome.png')} alt="genome"/>
            </div>
        </div>
        {/* <div className="rtpcr-product-heading-card">
            <h4>Stellence COVID-19 qPCR kit - Product Highlights</h4>
            <div className="rtpcr-product-card-contianer">
                <div className="rtpcr-product-card">
                    <img src={require('../photos/omicron.webp')}/>
                    <p><b>Coverage-</b> Developed to detect prevailing and newly emerged variants like <b>OMicron</b></p>
                </div>
                <div className="rtpcr-product-card">
                    <img src={require('../photos/readytouse.jpg')}/>
                    <p><b>Ready To use-</b> The kit comes in a <b>"Just Add Water"</b> format where no other reagent is required</p>
                </div>
                <div className="rtpcr-product-card">
                    <img src={require('../photos/rtpcr-tech.jpg')}/>
                    <p><b>Technology- <br/>
                        4 gene<br/>
                        2 gene</b></p>
                </div>
                <div className="rtpcr-product-card">
                    <img src={require('../photos/multi-platform.webp')}/>
                    <p><b>Multi-platform compatibility-</b> with a with a wide range of instruments</p>
                </div>
                <div className="rtpcr-product-card">
                    <img src={require('../photos/storage-rtpcr.jpg')}/>
                    <p><b>Storage-</b> shipping and storage at room temperature</p>
                </div>
                
            </div>
            <h4>Svashmi Development Pipeline</h4>
        </div> */}

        <div className="svashmi-dev-container">
        <h4 >Svashmi Development Pipeline</h4>
            <div className="svashmi-card">
                <p><b>Covid</b>- Ambient Temperature, Naso-pharyngeal and Saliva testing</p>
            </div>
            <div className="svashmi-card">
                <p><b>Urinary Infection</b>– ​Results in 1.5 hours with screening and detection of 7 pathogens simultaneously</p>
            </div>
            <div className="svashmi-card">
                <p><b>Tuberculosis</b>– Increasing as a secondary infection to HIV and treatment non-compliance</p>
            </div>
            <div className="svashmi-card">
                <p><b>Sepsis/Hospital Acquired Infections</b>– 20 min test for ICU linens, uniforms, OTs</p>
            </div>
        </div>
        </>
    )
}

export default Diagnostics