import React from "react";
import '../APIs/APIs.css';


function Nutraceuticals(){
    return(
        <>
        <div className="api-heading-card-container">
            <h2>NUTRACEUTICALS</h2>
            <div className="api-card-container">
              <div className="products-card">
                <div className="products-card-inner">
                <img src={require('../photos/l-sele.png')} alt="nutra"/>
                <h3>L-SELENOMETHIONINE</h3>
                <h5><b>CAS No: 3211-76-5</b></h5>
                <b>Therapeutic area: </b> <i> Nutraceutical/  Selenium supplement</i>
                </div>
              
                </div>
                
                <div className="products-card">
                    <div className="products-card-inner">
                    <img src={require('../photos/methyl.png')} alt="nutra"/>
                    <h3>METHYL SELENOCYSTEINE</h3>
                    <h5><b>CAS No: 26046-90-2</b></h5>
                    <b>Therapeutic area: </b> <i> Nutraceutical/  Selenium supplement</i>
                    </div>
                
                </div>
            </div>
        </div>
        </>
    )
}

export default Nutraceuticals