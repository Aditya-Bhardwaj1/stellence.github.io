import React from "react";
import './StellenceNutra.css';

function StellenceNutra(){
    return(
        <>
        <div className="stellence-nutra-container">
            <div className="stellence-nutra-heading">
                <h2> Stellence Nutrition</h2>
                <p>Chemically Synthesized Highly Bioavailable</p>
            </div>
            <div className="stellence-nutra-subheading-img">
                <div className="stellence-nutra-subheading">
                    <h4>Stellence Poultry Trial</h4>
                    <p>Stellence's animal feed trial showing benefits in
                    commercial poultry</p>
                </div>
                <div className="stellence-nutra-img">
                    <img src={require('../../photos/poultry.jpg')} alt="poultry"/>
                </div>
            </div>
            <div className="stellence-card-img-container">
                <div className="stellence-card-img">
                    <img src={require('../../photos/poultry-graph1.png')}alt="graph"/>
                </div>
                <div className="stellence-card-img">
                    <img src={require('../../photos/poultry-graph2.png')}alt="graph"/>
                </div>
                <div className="stellence-card-img">
                    <img src={require('../../photos/poultry-graph3.png')}alt="graph"/>
                </div>
            </div>
            
        </div>
        <div className="stellence-nutra-container" id="horse-trials">
            
            <div className="stellence-nutra-subheading-img">
                <div className="stellence-nutra-img">
                    <img src={require('../../photos/horse.jpg')} alt="horse"/>
                </div>
                <div className="stellence-nutra-subheading">
                    <h4>Selenium</h4>
                    <p>Essential Trace element for equine health</p>
                </div>
                
            </div>
            <div className="stellence-card-img-container">
                <div className="stellence-card-img ">
                    <img src={require('../../photos/horse-graph1.png')} className="horse-cards" alt="poultry-data"/>
                </div>
                <div className="stellence-card-img ">
                    <img src={require('../../photos/horse-graph2.png')} className="horse-cards" alt="poultry-data"/>
                </div>
                <div className="stellence-card-img ">
                    <img src={require('../../photos/horse-graph3.png')} className="horse-cards" alt="poultry-data"/>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default StellenceNutra