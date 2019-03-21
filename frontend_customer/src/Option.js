import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroup'


class Option extends Component {
  
   saveAndNext = () => {
    const option = this.props.option;
    this.props.logAnswer(option)
    this.props.nextQuestion(option)
  }
  
  render() {
    return (
      <ListGroup.Item onClick={this.saveAndNext}>
        {this.props.option.name}
      </ListGroup.Item>
    );
  }
}
export default Option;


