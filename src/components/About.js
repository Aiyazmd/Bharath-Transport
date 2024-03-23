import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const About = (props) => {
  return (
    <div className="about-section-content" id={props.id}>
      <h1 className='about-heading'>ABOUT US</h1>
      <Container>
      <Row className='about-sub-content'>
        <Col >
          <p>We don’t just deliver products. We deliver values, reliability
            from the bottom line. Every day with servides like.</p>
            <p>Some of the services provided by Bharath transport service are:</p>
            <ul >
              <li className="list-size">BULK TRANSPORT.</li>
              <li className="list-size">TRANSPORT OUTSOURCING</li>
              <li className="list-size">PACKING AND MOVING SERVICES</li>
              <li className="list-size">GOODS DELIVERY SERVICES</li>
              <li className="list-size">PARCEL BOOKING SERVICES</li>
              <li className="list-size">EXPRESS CARGO SERVICES</li>
              <li className="list-size">More..</li>
              
            
            </ul>
        </Col>
        <Col>
          <p>
           At Bharath Transport Services, we’re here for serving people. Whether
           it’s truck service, bulk transport, we make you feel safe .
            When we make a commitment, we follow 
           through. From global corporations in need of logistics solutions 
           through Bharath Transport Services,
           we’ll give you our full attention and become a partner in your success
          </p>
          <Button className='button-content'>Learn More</Button>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default About