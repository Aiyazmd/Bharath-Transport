import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Service = (props) => {
  return (
    <div className="service-section-content" id={props.id}>
      <h1 className='service-heading'>Service</h1>
      <p className='service-para'>
        At BTS, we’re committed to deliver your products on the time 
        and get you back with every second Update and tracking of vehicle.
         Our service department take care of your product, handling everything 
      from state inspections and annual maintenance.</p>
      <Row className='servide-card'>
        <Col >
          <Card  >
          <Card.Body className="cardBody">
            <Card.Title className='cardColor card-subtitl'  style={{"color":"white"}}>BULK TRANSPORT</Card.Title>
            <Card.Text style={{"color":"white"}}>
            Our bulk feed transport services vary based on each customer’s
             individual needs. We can provide services that you need.</Card.Text>
           
          </Card.Body>
        </Card></Col>
        <Col><Card >
          <Card.Body className="cardBody">
            <Card.Title className='cardColor' style={{"color":"white"}}>TRANSPORT OUTSOURCING</Card.Title>
            <Card.Text style={{"color":"white"}}>
            Welcome to BTS, your go to destination for seamless transport outsourcing solutions is here.
            </Card.Text>
            
          </Card.Body>
        </Card></Col>
        <Col >
          <Card  >
          <Card.Body className="cardBody">
            <Card.Title className='cardColor card-subtitl'  style={{"color":"white"}}>PACKING AND MOVING SERVICES</Card.Title>
            <Card.Text style={{"color":"white"}}>
            Experience seamless packing and moving services with BTS with a smooth transition to your destination.
            </Card.Text>
           
          </Card.Body>
        </Card></Col>
        <Col><Card >
          <Card.Body className="cardBody">
            <Card.Title className='cardColor' style={{"color":"white"}}>GOODS DELIVERY SERVICES</Card.Title>
            <Card.Text style={{"color":"white"}}>
            Welcome to BTS, your trusted provider of efficient goods delivery services where you wish to.
           </Card.Text>
            
          </Card.Body>
        </Card></Col>
      </Row>
      <Row className='servide-card'>
      <Col >
          <Card  >
          <Card.Body className="cardBody">
            <Card.Title className='cardColor card-subtitl'  style={{"color":"white"}}>PARCEL BOOKING SERVICES</Card.Title>
            <Card.Text style={{"color":"white"}}>
            Easily book and track parcels with BTS, 
            your trusted partner for seamless parcel booking services for your needs.
            </Card.Text>
           
          </Card.Body>
        </Card></Col>
        <Col >
          <Card  >
          <Card.Body className="cardBody">
            <Card.Title className='cardColor card-subtitl'  style={{"color":"white"}}>EXPRESS CARGO SERVICES</Card.Title>
            <Card.Text style={{"color":"white"}}>
            Unlock reliable express cargo services with BTS, 
            delivering your shipments promptly and securely to their destination.
            </Card.Text>
           
          </Card.Body>
        </Card></Col>
        <Col >
          <Card  >
          <Card.Body className="cardBody">
            <Card.Title className='cardColor card-subtitl'  style={{"color":"white"}}>COMMODITIES TRANSPORT</Card.Title>
            <Card.Text style={{"color":"white"}}>
            We are your one-stop solution for efficient commodities transport. 
            With our user-friendly platform network.
            </Card.Text>
           
          </Card.Body>
        </Card></Col>
        <Col><Card >
          <Card.Body className="cardBody">
            <Card.Title className='cardColor' style={{"color":"white"}}>REFIGERATED TRANSPORT</Card.Title>
            <Card.Text style={{"color":"white"}}>
            We are your trusted partner for refrigerated transport solutions. 
            We provide safe delivery of your sensitive goods.</Card.Text>
            
          </Card.Body>
        </Card></Col>
       
      </Row>
      
    </div>
  )
}

export default Service