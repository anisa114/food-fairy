import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import { Redirect } from 'react-router'
import axios from 'axios'; 

class Quizform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
      dishes :[],
      submit: false
     
    }
    this.toggleHidden = this.toggleHidden.bind(this)
  }



  componentDidMount(){

    axios.get('http://localhost:3000/restaurants/2/dishes')
    .then(response => {
      this.setState({dishes:response.data.dishes})
      console.log(response.data.dishes)
    });

  }
  
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //console.log(event.target.elements.question.value)

    const data = {}

    for (let entry of new FormData(event.target).entries()) {
        data[entry[0]] = entry[1]
        console.log(entry)
    }

    console.log("for loop data", data)
    axios.post('http://localhost:3000/restaurants/2/quizzes',
      data
    )
    .then(response => {
      this.setState({submit: true})
    })
  }

  render() {
    return(
      <div>
      <h2 style={{color:'black', fontWeight:'bold', padding:'17px', marginTop:'.5em' }} >Create Quiz</h2>
      <form  onSubmit={this.handleSubmit} name="option">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Options</th>
            <th>Recommended Dish</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><textarea type="text" rows="3" name="question[1][name]"/></td>
            <td>1 <input type="text" name="question[1][options][1]"/><br/>2 <input type="text" name="question[1][options][2]"/><br/>3 <input type="text" name="question[1][options][3]"/></td>
            <td>Dish 1 
            <select name="dishid">
                {this.state.dishes.map((dish, idx) => (
                    <option key={idx} value={dish.id}>{dish.name}</option>
              ))}
            </select>
              
              <br/>
              Dish 2   
              <select name="dishid">
                {this.state.dishes.map((dish, idx) => (
                  
                  <option key={idx} value={dish.id}>{dish.name}</option>
                    
                ))}
            </select>
              
              <br/>
              
              Dish 3 
              <select name="dishid">
                {this.state.dishes.map((dish, idx) => (
                  
                  <option key={idx} value={dish.id}>{dish.name}</option>
                    
                ))}
            </select>

            <br/>
              </td>
          </tr>
          <tr>
            <td>2</td>
            <td><textarea type="text" rows="3" name="question[2][name]"/></td>
            <td>1 <input type="text" name="question[2][options][1]"/><br/>2 <input type="text" name="question[2][options][2]"/><br/>3 <input type="text" name="question[2][options][3]"/></td>            
            <td>Dish 1 
            <select name="dishid">
                {this.state.dishes.map((dish, idx) => (
                  
                  <option key={idx} value={dish.id}>{dish.name}</option>
                    
                ))}
            </select>
              <br/>
              
              Dish 2   
              <select name="dishid">
                {this.state.dishes.map((dish, idx) => (
                  
                  <option key={idx} value={dish.id}>{dish.name}</option>
                    
                ))}
            </select>
              
              <br/>
              
              Dish 3 
              <select name="dishid">
                {this.state.dishes.map((dish, idx) => (
                  
                  <option key={idx} value={dish.id}>{dish.name}</option>
                    
                ))}
            </select>

            <br/>
              </td>
          </tr>
          <tr>
            <td>3</td>
            <td><textarea type="text" rows="3" name="question[3][name]"/></td>
            <td>
              1 <input type="text" name="question[3][options][1]"/><br/>
              2  <input type="text" name="question[3][options][2]"/><br/>
              3  <input type="text" name="question[3][options][3]"/></td>            
            <td>Dish 1 
                <select name="dishid">
                    {this.state.dishes.map((dish, idx) => (
                      
                      <option key={idx} value={dish.id}>{dish.name}</option>
                        
                    ))}
                </select>
              <br/>
              
              Dish 2   
              <select name="dishid">
                  {this.state.dishes.map((dish, idx) => (
                    
                    <option key={idx} value={dish.id}>{dish.name}</option>
                      
                  ))}
            </select>
              <br/>
              Dish 3 
              <select name="dishid">
              {this.state.dishes.map((dish, idx) => (
                 
                <option key={idx} value={dish.id}>{dish.name}</option>
                  
              ))}
            </select>
            <br/>
              </td>
          </tr>
        </tbody>
      </Table>
      <button type="submit" style={{ borderRadius:'25px', padding:'15px 18px', marginLeft:'34em', marginTop:'2em', fontSize:'1.2em' }}> Submit </button>
      {this.state.submit && window.location.reload()}
      </form>
      </div>
    )
  } 
}

export default Quizform