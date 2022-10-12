import React from "react";
import '../APIs/APIs.css';


function HEIs(){
    return(
        <>
        <div className="api-heading-card-container">
            <h2>HIGH END INTERMEDIATES</h2>
            <div className="api-card-container">
              <div className="products-card">
                <div className="products-card-inner">
                <img src={require('../photos/2-amino.png')} alt="amino"/>
                <h3>2-Aminomethyl-7-chloro-2,3-dihydro-5-(2-fluorophenyl)-1H-1,4-benzodiazepine  dimaleate</h3>
                <h5><b>CAS No: 59469-29-3</b></h5>
                <b>API/Use: </b> <i>Midazolam</i>
                </div>
              
                </div>
                
                <div className="products-card">
                    <div className="products-card-inner">
                    <img src={require('../photos/4-guan.png')} alt="4-guan"/>
                    <h3>4-Guanidinobenzoic acid hydrochloride</h3>
                    <h5><b>CAS No: 42823-46-1</b></h5>
                    <b>API/Use: </b> <i>Nafamostat Mesylate</i>
                    </div>
                
                </div>
            
              <div className="products-card">
                <div className="products-card-inner">
                <img src={require('../photos/6-amid.png')} alt="6-amid"/>
                <h3>6-Amidino-2-naphthol methane sulfonate</h3>
                <h5><b>CAS No: 82957-06-0</b></h5>
                <b>API/Use: </b> <i>Nafamostat Mesylate</i>
                </div>
              </div>
            
            
              
            </div>
        </div>
        </>
    )
}

export default HEIs