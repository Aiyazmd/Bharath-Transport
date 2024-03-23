import React from 'react'
import Container from 'react-bootstrap/Container';
import { Button, Col, Row } from 'react-bootstrap'
//import BrandNames from './brandNames'
import Image from 'react-bootstrap/Image';
import HomeImg from "../assets/images/banner.jpg"
const Home = ({id }) => {
  return (
    <div>
    <div className='home-section-content' id={id}>
      <Row >
          <Col className='home-content-left'>
          <h1 className='home-heading'>Better Solutions For </h1>
          <h1 className='home-heading'> Your Business</h1>
          <p className="home-para">We are team of DELIVERING VALUE. WHEN & WHERE YOU WISH. </p>
          <Button className='button-content'>Lets Connect</Button>
          </Col>
          <Col>
          <Image className='heaer-image' src={HomeImg} width={450} height={450}/>
          </Col>
      </Row>
      
      </div>
      {/* <BrandNames  /> */}
      </div>
  )
}

export default Home