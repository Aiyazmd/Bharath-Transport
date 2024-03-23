import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
    <div className='footer-content'>
      <Row className='footer-sub'>
        <Col>
        <h4>BHARATH TRANSPORT SERVICES</h4>
        <p>1-59/7/3/A</p>
        <p>Syed Anwar Manzil</p>
        <p>Opposit reliance trend</p>
        <p>Phone: +91 9701816786, +91 7386456775</p>
          <p>Email: bharattransportservice.com</p>      
        </Col>

        <Col>
        <h4>Useful Links</h4>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Privacy policy</li>
        </ul>
        </Col>


        <Col>
        <h4>Our Services</h4>
        <ul>
          <li>BULK TRANSPORT</li>
          <li>COMMODITIES TRANSPORT</li>
          <li>TRANSPORT OUTSOURCING</li>
        </ul>
        </Col>


       
      </Row>
    </div>
    <div></div>
    </>
  )
}

export default Footer