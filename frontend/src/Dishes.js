import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios'; 
import { Redirect } from 'react-router'
import NavBar from './navbar.js';

class Dishes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
      submit: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const data = {}

    for (let entry of new FormData(event.target).entries()) {
        data[entry[0]] = entry[1]
    }

    console.log("for loop data", data)
    axios.post('http://localhost:3000/restaurants/2/dishes',
      data
    )
    .then(response => {
      this.setState({submit: true})
    })
  }
  
  render() {
    return (
      <div>
        <NavBar fixed="top" />
        <h2 style={{color:'black', fontWeight:'bold', padding:'17px', marginTop:'1em' }} >My Featured Dishes</h2>
        <form onSubmit={this.handleSubmit}>
          <Table striped bordered hover >
            <thead>
              <tr>
                <th>#</th>
                <th>Dish</th>
                <th>Image Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><input type="text" name="dish[1]" style={{width:'300px'}} /></td>
                <td><input type="text" name="dish[1][img][1]" style={{width:'300px'}} /></td>
              </tr>
              <tr>
                <td>2</td>
                <td><input type="text" name="dish[2]" style={{width:'300px'}} /></td>
                <td><input type="text" name="dish[2][img][2]" style={{width:'300px'}} /></td>
              </tr>
              <tr>
                <td>3</td>
                <td><input type="text" name="dish[3]" style={{width:'300px'}} /></td>
                <td><input type="text" name="dish[3][img][3]" style={{width:'300px'}} /></td>
              </tr>
              <tr>
                <td>4</td>
                <td><input type="text" name="dish[4]" style={{width:'300px'}} /></td>
                <td><input type="text" name="dish[4][img][4]" style={{width:'300px'}} /></td>
              </tr>
              <tr>
                <td>5</td>
                <td><input type="text" name="dish[5]" style={{width:'300px'}} /></td>
                <td><input type="text" name="dish[5][img][5]" style={{width:'300px'}} /></td>
              </tr>
            </tbody>
          </Table>
          <button type="submit" style={{ borderRadius:'25px', padding:'15px 18px', marginLeft:'34em', marginTop:'2em', fontSize:'1.2em' }} > Submit </button>
          {this.state.submit && <Redirect to='/restaurants/quizzes'/>}
        </form>
      </div>
    );
  }
}

export default Dishes