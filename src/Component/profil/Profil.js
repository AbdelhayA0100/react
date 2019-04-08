import React, { Component } from 'react'
import './Profil.css';
import dGo8DOk from'../../dGo8DOk.jpg';
import {Button ,Form ,Col,Row,Container,Image} from 'react-bootstrap';
import {  } from 'react-bootstrap';
import  Nav  from 'react-bootstrap/Nav';
export default class Profil extends Component {
        state = {
          users:[
        {id:1 ,name :"mohammed",email:"mohammed@gmail.com"},
        {id:2 ,name :"ahmed",email:"ahmed@gmail.com"},
        {id:3 ,name :"karim",email:"ahmed@gmail.com"}
      ]
      }
  render() {
    
    return (

    <div className="main-content">
        <div className="titel">

        </div>
    <div className="main">
    <div class="card">
          <div class="card-header">
            Profil
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
            <Nav variant="tabs" defaultActiveKey="/home"  id="myTabContent">
                  <Nav.Item>
                    <Nav.Link href="#" id="home">Active</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1" id="profile">Option 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                  </Nav.Item>
            </Nav>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active form_profil" id="home" role="tabpanel" aria-labelledby="home-tab">
              <Container>
                        <Row>
                          <Col xs={8} md={8} lg={8}>
                          <Form>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter Name" />
                          </Form.Group>
                          <Form.Group controlId="formBasicEmail">
                          <Form.Label>Prenom</Form.Label>
                          <Form.Control type="text" name="prenom" placeholder="Enter Prenom" />
                        </Form.Group>
                        
                        
                          <Form.Group controlId="formBasicPassword">
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="email" placeholder="Enter Email" />
                          </Form.Group>
                          <Form.Group controlId="formBasicPassword">
                              <Form.Label>New Password</Form.Label>
                              <Form.Control type="password" placeholder="Password" />
                          </Form.Group>
                          
                          
                          <Button variant="primary" type="submit">
                            Submit
                          </Button>
                        </Form>
                          </Col>
                          <Col xs={4} md={4} lg={4}>
                           
                          </Col>
                        </Row>
              </Container>
           
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
          </div>
            </blockquote>
          </div>
        </div>
      </div>
      
      </div>
    )
  }
}
