import React, { Component } from 'react';
import {Redirect } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const loginStyles = {
   paddingTop: '15px',
   color: 'white',
   textShadow: '0px 2px 3px black'
    
  };

  const logoStyles = {
      color: 'paleturquoise',
      fontSize: '4em',
      textShadow: '0px 2px 3px black',
      paddingLeft: '760px',
      whiteSpace: 'nowrap',
      overFlow: 'hidden',
      paddingTop: '3em',
      fontFamily: 'Sacramento'
  }

  
 class CustomerLogin extends Component {
     constructor(){
         super()
         this.state = {
            login: false
         }
         this.handleChange = this.handleChange.bind(this);
     }


    handleChange(e) {
        this.setState({login: true})
    }


    render()    {
        return (
        <Container>
            <Row>
                <Col style={logoStyles} sm={4}>
                    Food Fairy <img style={{width:'50px'}} src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/114/fairy_1f9da.png"/>
                </Col>
            </Row>
            <Row>
                <Col sm={8}></Col>
                <Col style={loginStyles} sm={4}>
                <Form >
                <h1>Login</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button  onClick={this.handleChange} variant="info" type="submit">
                    Submit
                </Button>
                </Form>
                 {this.state.login && <Redirect to='/maps'/>}
                </Col>
            </Row>
        </Container>
           
        )
    }
 }

 export default CustomerLogin