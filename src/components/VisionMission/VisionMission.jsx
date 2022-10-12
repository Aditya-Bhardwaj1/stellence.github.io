import React from "react";
import './VisionMission.css';

function VisionMission(){
    return(
        <> 
            <div className="vision-mission-heading">
                <h2><b>Vision & Mission</b></h2>
            </div>
            <div className="vision-text-photo">
                <div className="vision-photo">
                    <img src={require('../photos/vision-img.jpg')}/>
                </div>
                <div className="vision-text">
                    <h4> Vision</h4>
                    <p>To Bring Health and Happiness to All through High Quality, Life Saving Medicines</p>
                </div>
            </div>
            {/* mission part */}
            <div className="mission-text-photo"> 
                <div className="mission-text">
                    <h4> Mission</h4>
                    <p>Employ Our Advanced Knowledge of Chemistry to Develop Portfolio of Niche, Life Saving Medicines</p>
                </div>
                <div className="mission-photo">
                    <img src={require('../photos/mission-img.png')}/>
                </div>
            </div>

        </>
    )
}

export default VisionMission