import React from "react";
import './Timeline.css';
import Card from 'react-bootstrap/Card';


function Timeline(){
    return(
    <>
    <div className="timeline-head-cards-container">
    <h2 className="timeline-heading">Timeline</h2>
    

    <div className="timeline-cards-container">
    <Card >
      <Card.Body>
        <Card.Title>2005-2019</Card.Title>
        <div className="orange-circle"></div>
        <Card.Text>
        Developed select products using niche chemistry scale-up – hydrogenation, Iodine based chemistry, halogenation
        </Card.Text>
       
      </Card.Body>
    </Card>

    <Card >
      <Card.Body>
        <Card.Title>2021</Card.Title>
        <div className="orange-circle"></div>
        <Card.Text>
        Launched New Products HEINs, Nutrition 
Introduced RTPCR based Diagnostics 
Started developing peptide and amino acid chemistry
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card >
      <Card.Body>
        <Card.Title>2022</Card.Title>
        <div className="orange-circle"></div>
        <Card.Text>
        Started Formulations of NCEs and proprietary generics
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    </div>
    </>
    )
}

export default Timeline