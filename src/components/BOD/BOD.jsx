import React from "react";
import './BOD.css';

function BOD(){
    return(
        <>
        <div className="heading-bod-container">
        <h2 className="bod-heading">Our Team</h2>
        <h3 className="sub-bod-heading">Board Of Directors</h3>
        
        <div className="bod-container">
            <div className="maincontainer">
                <div className="thecard">
                    <div className="thefront">
                    <img src={require("../photos/Ram1.jpg")} className="bod-card-image" alt="ramimage"/>
                    <h3 className="bod-card-heading">Ramachandran Radhakrishna</h3>
                    <h5 className="subheading-bod-card">Director</h5>
                    </div>
                    <div className="theback">
                        <p className="bod-description">
                        Ramachandran Radhakrishnan (Ram) has nearly three decades of experience in the Pharmaceuticals and Chemicals space. He has held a variety of senior positions with progressively increasing responsibilities in the Pharmaceutical industry in India, USA and Europe. He was until 2005, the Executive Director and a member of the Board of Directors at Strides Arcolab Limited - a listed healthcare company.<br/>

                        Ram has been an entrepreneur since 1983, and has been keenly involved in turning around sick and problematic companies.<br/>

                        His last assignment of over 10 years was as part of a three member senior management <b>team</b> at Strides Arcolab Limited (SAL). He was actively involved in and was instrumental in the growth of the company. He was in charge of the 'Steriles Division' of the company initially and later was Head of Operations of the Contract Research and Manufacturing (CRAM) business at SAL, in which he was involved right from its acquisition. He was instrumental in the acquisition of the US business and was in charge of its operations till 2005.


                        </p>
                    </div>
                    
                </div>
            </div>
            <div className="maincontainer">
                <div className="thecard">
                    <div className="thefront">
                    <img src={require("../photos/anu.png")} className="bod-card-image" alt="anuradhaimage"/>
                    <h3 className="bod-card-heading">Anuradha Ramachandran</h3>
                    <h5 className="subheading-bod-card">Director</h5>
                    </div>
                    <div className="theback">
                        <p className="bod-description">
                        Ms. Anuradha is an expert in learning and development especially in clinical research and has developed programs for successful placements of several youth both in India and abroad. Ms. Anuradha has been a founding Director of the company.
                        </p>
                    </div>
                    
                </div>
            </div>
            <div className="maincontainer">
                <div className="thecard">
                    <div className="thefront">
                    <img src={require("../photos/aakash.png")} className="bod-card-image" alt="aakashimage"/>
                    <h3 className="bod-card-heading">Akash Mathur</h3>
                    <h5 className="subheading-bod-card">CEO & Executive Director</h5>
                    </div>
                    <div className="theback">
                        <p className="bod-description">
                        Akash has more than 2 decades of experience start-up and turning around Pharma businesses, including a microarray based startup in the USA and a discovery pharma company in Canada. He has held senior positions at various organisations including TATA and Dr. Reddys. His last assignment was as CEO of Bal Pharma, a listed company.<br/><br/>

                        He holds a PhD in Human Pathology from St Louis University and an MBA in Marketing from Olin Business School, Washington University and brings strong sales, marketing and profitability approaches to businesses.
                        </p>
                    </div>
                    
                </div>
            </div>

            
        </div>
        </div>
        </>
    )
}

export default BOD