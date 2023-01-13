import React from "react";
import './FormulationsTechnology.css'

function FormulationsTechnology(){
    return(
        <>
        <div className="formulations-heading-bg">
            <h2> Formulations Technology</h2> 
        </div>
        <div className="avigna-content">
            <div className="avigna-heading">
                <h3 className="avi-bold">AvignaSoL™ </h3>
                <h4> <b>A Proprietary Formulation Technology Platform </b> </h4>
            </div>
            <div className="avigna-description">
                <ul >
                    <li>AvignaSoL™, a patented formulations technology licensed by Stellence Pharmscience in an exclusive arrangement
                    </li>
                    <li>Clinical studies shows improved bioavailability of certain poorly soluble molecules 
                    </li>
                    <li>Improved transdermal / transmucosal permeation of the drug.
                    </li>
                    <li>Classified as a “Novel Excipient” (New excipient) 
                    </li>
                    <li>Miscible in most of the commonly used pharmaceutical solubilisers. 
                    </li>
                </ul>

                <h4>AvignaSoL™- Areas of Application
                </h4>
                
                    <img src={require('../photos/formulation.png')} alt="applic"/>
                
            </div>
        </div>
        </>
    )
}

export default FormulationsTechnology