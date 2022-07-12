import React, {useEffect} from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import Aos from "aos";
import "aos/dist/aos.css";

import astro1 from './img/astro1.png';

const Showcase = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
  }, []);
    return (
        <>
         <section className="showcase">
            <Container>
                <Row className="show">
                    <Col md={6} className="title">
                        <h1 data-aos="fade-right" data-aos-duration="700" data-aos-delay="100">How's your day</h1>                  
                        <p data-aos="fade-right" data-aos-duration="700" data-aos-delay="200">The coffee beans are roasted in an environmentally friendly way. This coffee tastes particularly mild and aromatic. The beans are made from 100% Arabica and are available in many different varieties with a particularly strong aroma.</p>
                        <button type="submit" data-aos="fade-up-right" data-aos-duration="700" data-aos-delay="300">More Info</button>
                    </Col>
                    
                    <Col md={6}>
                        <img src={astro1} />
                    </Col>
                </Row>   
            </Container> 
         </section>
        </>
    )
}

export default Showcase
