import React, { Component } from 'react';
import Option from './option.js'
import './style.css'
import Card from 'react-bootstrap/Card'

class Question extends Component{
  render() {
    return(
     
      <div id="questions">

        <Card border="secondary" style={{ width: '35rem' }}>
            <Card.Header><h2>Quiz</h2></Card.Header>
            <Card.Body>
              {this.props.question.questions.map((element, idx) => {
                return <div key={element.id}> 
                        <h4> {idx + 1}. {element.inquiry} </h4>
                        <Option key={idx} options={element.options} /> 
                      </div>
       })}
            </Card.Body>
        </Card>


       {/* <input value={this.props.question.inquiry} name={this.props.question.id} />  */}
       {/* {this.props.question.questions.map((item, idx) => {
         return <Option option={item} key={idx} qid={item.question_id} /> 
       })} */}
  
      </div>
    )
  }
}

export default Question