import React, { Component } from 'react';
import axios from 'axios'; 
import Quiz from './quiz.js'
import QuizForm from './quizform.js'
import NavBar from './navbar.js';


class QuizWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quiz: [],
      editingQuiz: false
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/restaurants/2/quizzes')
    .then(res => {
        this.setState({
          quiz: res.data.quizzes
        })
    
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }


  render() {
    return (
      <div>
          <NavBar fixed="top" />        
         { (this.state.quiz.length > 0)
             ? 
            <Quiz quiz={this.state.quiz} />
             : 
             <QuizForm quiz={this.state.quiz}  />
         }

        {/* <button onClick={this.toggleEditing}>
          { this.state.editingQuiz ? 'Cancel' : 'Edit' }
        </button> */}
      </div>


    );
  }


}

export default QuizWrapper