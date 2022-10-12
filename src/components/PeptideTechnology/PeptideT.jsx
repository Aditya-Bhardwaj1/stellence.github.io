import React from "react";
import './PeptideT.css';

function PeptideT(){
    return(
    <>
    <div className="peptide-heading-bg">
       <h2> Peptide Technology</h2> 
    </div>
    <div className="peptide-card-container">
        <div className="peptide-2card-container">
            <div className="peptide-card">
                <button className="btn">STAPLED PEPTIDES</button>
                <div className="photo-peptide-card" id="stapled-img">
                <img src={require('../photos/stapled1.png')} alt="stapled"/>
                <img src={require('../photos/stapled2.png')} alt="stapled"/>
                </div>
            </div>
            <div className="peptide-card">
                <button className="btn">CLICK CHEMISTRY</button>
                <div className="photo-peptide-card">
                <img src={require('../photos/click-chemistry.png')} alt="click-chem"/>
                
                </div>
            </div>
        </div>
        <div className="peptide-text-container">
        <div className="peptide-text">
            <p>ESTABLISHED IN COLLABORATION WITH EXTENSIVELY EXPERIENCED TEAM</p>
        </div>
        </div>
        <div className="peptide-2card-container">
            <div className="peptide-card">
                <button className="btn">CYS BRIDGING</button>
                <div className="photo-peptide-card" id="cys-br">
                <img src={require('../photos/cys-bridging.png')} alt="cys-bridging"/>
                
                </div>
            </div>
            <div className="peptide-card">
                <button className="btn">NESTED DISULPHIDES</button>
                <div className="photo-peptide-card">
                <img src={require('../photos/nested-di.png')} alt="nested-di"/>
                
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default PeptideT