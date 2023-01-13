import React from "react";
import './Rtpcr.css';

function Rtpcr(){
    return(
    <>
    <div className="rtpcr-container">
        <div className="rtpcr-heading">
        <h2>RT-PCR based Diagnostics</h2>
        </div>
        <div className="rtpcr-text-img-container">
            <h4>Stellence Covid 19 RT-qPCR kit  - Validation data</h4>
            <img src={require('../../photos/rtpcr-img.png')} alt="graphdata"/>
        </div>
        <div className="rtpcr-card-image-container">
        <img src={require('../../photos/rtpcr-kit.png')} alt="rtpcr-kit"/>
        <div className="rtpcr-card-container">
            <div className="rtpcr-card">
                <h6>2021</h6>
                <ul>
                    <li>Developed Covid Testing Kit</li>
                    <li>Ambient Temp shipping and storage</li>
                    <li>Saliva Testing</li>
                </ul>
            </div>
            {/* <div className="rtpcr-card">
                <h6>2022-Canada Facility</h6>
                <ul>
                    <li>To manufacture under Canadian GMP</li>
                    <li>Health Canada Approval</li>
                </ul>
            </div> */}
            {/* <div className="rtpcr-card">
                <h6>Next set of Kits</h6>
                <ul>
                    <li>Have developed a robust pipeline of kits for different applications</li>
                    
                </ul>
            </div> */}
        </div>
        </div>
    </div>
    
    </>
    )
}

export default Rtpcr