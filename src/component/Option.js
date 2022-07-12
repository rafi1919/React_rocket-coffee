import React,{useEffect} from 'react'

import { Row, Col, Container} from 'react-bootstrap'
import Aos from "aos";
import "aos/dist/aos.css";

import menu1 from './img/menu1.png'
import menu2 from './img/menu2.png'
import menu3 from './img/menu3.png'


const Option = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
      }, []);
    return (
        <>
        <section className='option'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#DCD7C9" fill-opacity="1" d="M0,128L80,154.7C160,181,320,235,480,213.3C640,192,800,96,960,74.7C1120,53,1280,107,1360,133.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>          
              <Container fluid="md">
                  <h1>Our Best Seller </h1>
                  <Row className="d-flex justify-content-between">
                    <Col  className='menu' data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" >
                        <img src={menu1} />
                        <p>Cupcakes</p>
                    </Col>

                    <Col  className='menu' data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
                        <img src={menu2} />
                        <p>Hot Latte</p>
                    </Col>

                    <Col  className='menu' data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
                        <img src={menu3} />
                        <p>A Depresso</p>
                    </Col>

                  </Row>

              </Container>
        </section>  
        </>
    )
}

export default Option
