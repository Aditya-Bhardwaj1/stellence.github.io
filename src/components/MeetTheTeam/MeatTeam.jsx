import React from "react";
import './MeatTeam.css';
import Card from 'react-bootstrap/Card';

function MeetTeam(){
    return(
        <>
        <div className="heading-box-container">
            <div>
            <h2 className="meat-heading">Meet The Team</h2>
            </div>
            <div className="cards-container">
            <div className="two-cards">
                <Card  className="indi-card">
                    <Card.Body>
                        <Card.Title>T. SABIL</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted, sub-heading">Head of Commercial Operations</Card.Subtitle>
                        <Card.Text>
                        Sabil joined Stellence Pharmscience (erstwhile KCL) in early 2007 as Senior Officer - Commercial. Prior to joining KCL, he was working with Sami Labs Limited, Bangalore for over seven years. He has extensive experience in Commercial activities and at Stellence is in charge of Supply Chain Management, including global procurement and Production planning and inventory control.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                <Card  className="indi-card">
                    <Card.Body>
                        <Card.Title>M. MURUGANANDHAM</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted, sub-heading">Head of Production</Card.Subtitle>
                        <Card.Text>
                        Muruganandam joined Stellence as the Head of production with over 20 years of experience in several roles in production including the last assignment as Asst. Manager at Biocon.<br/>

                        He is also an Alumni of the University of Madras.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>
            
            <div className="two-cards">
                <Card  className="indi-card">
                    <Card.Body>
                        <Card.Title>RAJKUMAR K</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted, sub-heading">Head of QA</Card.Subtitle>
                        <Card.Text>
                        Rajkumar is in charge of the QA department at Stellence. Prior to joining Stellence, he has been part of the QA department at Biocon. He has an extensive experience of 17 years in QA functions.<br/>

                        He holds an MSc from Kuvempu University, Shimoga.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                <Card  className="indi-card">
                    <Card.Body>
                        <Card.Title>LAKSHMI BHASKAR</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted, sub-heading">Head of Business Development</Card.Subtitle>
                        <Card.Text>
                        Lakshmi joined the BD team at Stellence with 10 years of experience working with CROs based in Bangalore and Singapore including stints at Biocon and Anthem Biosciences.<br/>

                        She holds a BTech in Industrial Biotechnology and MBA in Marketing from IMT Ghaziabad. She is also an alumni of NUSAGE-Parexel Academy, NUS, Singapore.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>
            
            </div>
        </div>
        </>
    )
}

export default MeetTeam



