import React, { Component } from 'react';
import Question from './question.js'
import ListGroup from 'react-bootstrap/ListGroup';

// Quiz component is responsible for displaying quiz to users
class Quiz extends Component{

  render() {  
    return(
      <ListGroup variant="flush" style={{paddingTop:'2em'}} >
        {
          this.props.quiz.map((item, idx) => {
            return <Question question={item} key={idx} />
          })
        }
      </ListGroup>
    )
  }
}

export default Quiz;

