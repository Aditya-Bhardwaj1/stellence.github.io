import React from "react";
import './SCK.css';

function SCK(){
    return(
        <>
        <div className="heading-bg">
            <h2>Specialized Chemistry Knowledge</h2>
        </div>
        <div className="sck-card-container">
            <div className="sck-card">
                <div className="sck-card-img">
                <img src={require('../photos/hydrogen.png')} alt='hydrogenation'/>
                </div>
                <h4> <b>HYDROGENATION</b></h4>
                <p>2KL, 1KL, 250L and 10L Vessels</p>
            </div>
            <div className="sck-card sck-card-grey">
                <div className="sck-card-img">
                <img src={require('../photos/low-temp.png')} alt='low temp.'/>
                </div>
                <h4> <b>LOW TEMPERATURE REACTION</b></h4>
                <p>2KL Vessel</p>
            </div>
            <div className="sck-card">
                <div className="sck-card-img">
                <img src={require('../photos/peptide-chem.png')}/>
                </div>
                <h4> <b>PEPTIDE CHEMISTRY</b></h4>
                <p>Solid Phase Solution Phase</p>
            </div>
            <div className="sck-card sck-card-grey">
                <div className="sck-card-img">
                <img src={require('../photos/metal-ion.png')}/>
                </div>
                <h4> <b>METAL ION COUPLING</b></h4>
                <p>Ton Scale Production</p>
            </div>
            <div className="sck-card">
                <div className="sck-card-img">
                <img src={require('../photos/lactum.png')}/>
                </div>
                <h4> <b>LACTAM BRIDGING</b></h4>
                <p>Several Molecules, mg scale</p>
            </div>
            <div className="sck-card sck-card-grey">
                <div className="sck-card-img">
                <img src={require('../photos/iodine.png')}/>
                </div>
                <h4> <b>IODINE <br/> CHEMISTRY</b></h4>
                <p>Ton Scale Production</p>
            </div>
        </div>
        </>
    )
}

export default SCK