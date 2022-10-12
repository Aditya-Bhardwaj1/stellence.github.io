import React from "react";
import './HomePage.css';

function HomePage(){
    return(
        <>
        <div className="homepage-container">
            <div className="homepage-headings">
                <h2>
                    Stellence PharmScience
                </h2>
                <h4>
                    Manufacturing Excellence in Life Saving Medicines <br/>Since 2007
                </h4>
            </div>
            <div className="homepage-card-container">
                <div className="homepage-card">
                    <div className="homepage-icon">
                        <img src={require('../photos/reactor-home.png')}/>
                    </div>
                    <div className="homepage-card-heading">
                        10 KL Reactor capacity
                    </div>
                </div>

                <div className="homepage-card">
                    <div className="homepage-icon">
                        <img src={require('../photos/soil.png')}/>
                    </div>
                    <div className="homepage-card-heading">
                    Zero Liquid Discharge, Air, Soil Monitoring
                    </div>
                </div>

                <div className="homepage-card">
                    <div className="homepage-icon">
                        <img src={require('../photos/fully.png')}/>
                    </div>
                    <div className="homepage-card-heading">
                    Fully Equipped Pilot Plants 
                    </div>
                </div>

                <div className="homepage-card">
                    <div className="homepage-icon">
                        <img src={require('../photos/hydro-power.png')}/>
                    </div>
                    <div className="homepage-card-heading">
                    Hydrogenation, Grignard Reaction
                    </div>
                </div>

                <div className="homepage-card">
                    <div className="homepage-icon">
                        <img src={require('../photos/quality.png')}/>
                    </div>
                    <div className="homepage-card-heading">
                    Quality System
                    </div>
                </div>

                <div className="homepage-card">
                    <div className="homepage-icon">
                        <img src={require('../photos/green-home.png')}/>
                    </div>
                    <div className="homepage-card-heading">
                    5.5 Acres Lush Green Campus
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default HomePage