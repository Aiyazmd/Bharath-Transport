import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Team = (props) => {
  return (
    <div className="team-section-content" id={props.id}>
      <h1 className='team-heading'>Team</h1>
      <p className='team-para'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur
        ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
        quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
        Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        <Row>
        <Col >
          <Card  >
          <Card.Body className='team-card'>
            <Card.Title style={{"color":"white"}}>Card Title</Card.Title>
            <Card.Subtitle style={{"color":"white"}}>Lorem Ipsum</Card.Subtitle>
            <Card.Text style={{"color":"white"}}>
            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
            </Card.Text>
           
          </Card.Body>
        </Card></Col>
        <Col><Card >
          <Card.Body className='team-card'>
            <Card.Title style={{"color":"white"}}>Card Title</Card.Title>
            <Card.Subtitle style={{"color":"white"}}>Sed ut perspici</Card.Subtitle>
            <Card.Text style={{"color":"white"}}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            </Card.Text>
            
          </Card.Body>
        </Card></Col>
      </Row>
      <Row className='servide-card'>
        <Col ><Card >
          <Card.Body className='team-card'>
            <Card.Title style={{"color":"white"}}>Card Title</Card.Title>
            <Card.Subtitle style={{"color":"white"}}>Magni Dolores</Card.Subtitle>
            <Card.Text style={{"color":"white"}}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            </Card.Text>
           
          </Card.Body>
        </Card></Col>
        <Col><Card >
          <Card.Body className='team-card'>
            <Card.Title style={{"color":"white"}}>Card Title</Card.Title>
            <Card.Subtitle style={{"color":"white"}}>Nemo Enim</Card.Subtitle>
            <Card.Text style={{"color":"white"}}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            </Card.Text>
           
          </Card.Body>
        </Card></Col>
      </Row>
    </div>
  )
}

export default Team