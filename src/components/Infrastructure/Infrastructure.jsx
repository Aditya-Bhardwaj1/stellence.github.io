import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Infrastructure.css';

function Infrastructure(){
    return(
        <>
        <div className="heading-image-container">
            <h2 className="infra-heading">Infrastructure</h2>
        <div className="image-container">
            
        <div className="infra-container">
        <Carousel fade variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../photos/slide1.JPG')}
          alt="First slide"
          
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../photos/slide2.jpg')}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../photos/slide3.jpg')}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../photos/slide4.jpg')}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../photos/slide5.jpg')}
          alt="Second slide"
        />

        
      </Carousel.Item>
      
    </Carousel>
    </div>
    </div>
    </div>
        </>
    )
}

export default Infrastructure