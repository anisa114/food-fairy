import React, {Component} from 'react';
import Option from "./Option.js";
import ListGroup from 'react-bootstrap/ListGroup'

class OptionsList extends Component {
  render() {
    return (
      <ListGroup variant="flush">
        {this.props.options.map((option, index) => {
          return <Option 
          option={option} 
          nextQuestion={this.props.nextQuestion} 
          key={option.id}
          logAnswer={this.props.logAnswer} />
        })}
      </ListGroup>
    );
  }
}
export default OptionsList;