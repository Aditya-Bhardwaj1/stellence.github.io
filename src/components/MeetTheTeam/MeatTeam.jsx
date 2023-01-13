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
                        <Card.Title>T. SABIL, MBA</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted, sub-heading">Head of Commercial Operations</Card.Subtitle>
                        <Card.Text>
                            Mr. Sabil has more than 20 years of experience in managing various aspects operations in pharmaceutical
                            companies and is associated with Stellence since its inception where he leads the commercial operations.
                         </Card.Text>
                        
                    </Card.Body>
                </Card>
                <Card  className="indi-card">
                    <Card.Body>
                        <Card.Title>M. MURUGANANDHAM</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted, sub-heading">Head of Production</Card.Subtitle>
                        <Card.Text>
                        Mr. Muruganandam has over 20 years of experience in API production, including his last assignment, where he
                        led several products and has successfully faced regulatory audits including USFDA, EMA and other agencies.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>
            
            <div className="two-cards">
                {/* <Card  className="indi-card">
                    <Card.Body>
                        <Card.Title>RAJKUMAR K</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted, sub-heading">Head of Quality Assurance</Card.Subtitle>
                        <Card.Text>
                        Mr. Rajkumar has 17 years of experience in Quality Assurance where he has prepared the facilities and
                        successfully completed audits from several agencies including USFDA, EMA and agencies of other countries.
                        </Card.Text>
                        
                    </Card.Body>
                </Card> */}
                <Card  className="indi-card">
                    <Card.Body>
                        <Card.Title>LAKSHMI BHASKAR</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted, sub-heading">Head of Business Development</Card.Subtitle>
                        <Card.Text>
                        Ms. Lakshmi has more than 15 years of experience in Business Development roles in the pharmaceutical
                        industry including CROs, and API marketing.
                        </Card.Text>                       
                    </Card.Body>
                </Card>
            </div>

            <div className="two-cards">
                <Card  className="indi-card">
                    <Card.Body>
                        <Card.Title>Dr. Ambily</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted, sub-heading">Head of Regulatory Affairs</Card.Subtitle>
                        <Card.Text>
                        Dr. Ambily, PhD has several years of industry experience including QC, QA and
                        regulatory affairs. She is associated with Stellence since 2018.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                <Card  className="indi-card">
                    <Card.Body>
                        <Card.Title>Anilkumar C.</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted, sub-heading">Head of Quality Control</Card.Subtitle>
                        <Card.Text>
                        Mr. Anilkumar. C has 3 decades of experience in Quality Control in several pharma companies, where he has prepared facilities and successfully faced major audits like WHO-GMP, ISO,  TFDA,PMPB, MCAZ, TGA, MHRA, MCAZ.
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



