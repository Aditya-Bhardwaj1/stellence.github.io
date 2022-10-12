import React from "react";
import './FormDev.css';

function FormDev(){
    return(
        <>
        <div className="form-dev-container">
               <div className="form-dev-heading">
                <h2>Formulations Development</h2>
                </div>
                <div className="form-dev-card-container">
                    <div>
                        <div className="form-dev-card">
                            <h4>CASE I:</h4>
                            <p>CASE I: AK119 – Patented Australian Molecule Human use licensed for significant value Vet application facing bioavailability problems Proprietary Technology solved the problems, creating the possibility to address a large unmet medical need.</p>
                        </div>
                        <div className="form-dev-card" id="competition">
                            <h4>Competition</h4>
                            <p>Content yet to come</p>
                        </div>
                    </div>
                    <div className="form-dev-card" id="case2">
                            <h4>CASE II:</h4>
                            <p>CASE II: 100 year old herbal medicine company Developed New Products set with big market potential Problem – toxicity of the main ingredient Proprietary Technology application led to product with significantly reduced toxicity</p>
                        </div>
                </div>
        </div>
        </>
    )
}

export default FormDev