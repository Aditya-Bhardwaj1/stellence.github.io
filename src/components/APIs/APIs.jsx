import React from "react";
import './APIs.css';
import Card from 'react-bootstrap/Card';

function APIs(){
    return(
        <>
        <div className="api-heading-card-container">
            <h2>ACTIVE PHARMACEUTICAL INGREDIENT</h2>
            <div className="api-card-container">
              <div className="products-card">
                <div className="products-card-inner">
                <img src={require('../photos/carte.png')}/>
                <h3>CARTEOLOL HYDROCHLORIDE</h3>
                <h5><b>CAS No: 51781-21-6</b></h5>
                <b>Therapeutic area: </b> <i>Ophthalmic</i>
                </div>
              
                </div>
                
                <div className="products-card">
                    <div className="products-card-inner">
                    <img src={require('../photos/cyclope.png')}/>
                    <h3>CYCLOPENTOLATE</h3>
                    <h5><b>CAS No: 512-15-2</b></h5>
                    <b>Therapeutic area: </b> <i>Ophthalmic</i>
                    </div>
                
                </div>
            
              <div className="products-card">
                <div className="products-card-inner">
                <img src={require('../photos/propy.png')}/>
                <h3>PROPYPHENAZONE</h3>
                <h5><b>CAS No: 479-92-5</b></h5>
                <b>Therapeutic area: </b> <i>Analgesic</i>
                </div>
              </div>
            
            
              <div className="products-card">
                <div className="products-card-inner">
                <img src={require('../photos/PHENAZONE.png')}/>
                <h3>PHENAZONE</h3>
                <h5><b>CAS No: 60-80-0</b></h5>
                <b>Therapeutic area: </b> <i>Analgesic</i>
                </div>
              </div>

              <div className="products-card">
                <div className="products-card-inner">
                <img src={require('../photos/lidocaine.png')}/>
                <h3>LIDOCAINE</h3>
                <h5><b>CAS No: 137-58-6</b></h5>
                <b>Therapeutic area: </b> <i>Local Anesthetic</i>
                </div>
              </div>

              <div className="products-card">
                <div className="products-card-inner">
                <img src={require('../photos/modafinil.jpg')}/>
                <h3>MODAFINIL</h3>
                <h5><b>CAS No: 68693-11-8</b></h5>
                <b>Therapeutic area: </b> <i>Wakefulness Promoting Agents</i>
                </div>
              </div>
            </div>
        </div>
        </>
    )
}

export default APIs
