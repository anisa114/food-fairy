import React, {Component} from 'react';
import OptionsList from "./OptionsList.js";
import Breadcrumbs from "./Breadcrumbs.js";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroup'

class Question extends Component {
  render() {
    if (this.props.display) {
      return (
        <div>
          <Card.Header>
            <h5>{this.props.question.inquiry}</h5>
          </Card.Header>
          <OptionsList 
          options={this.props.question.options} 
          nextQuestion={this.props.nextQuestion}
          logAnswer={this.props.logAnswer} />
        </div>
      );
    }
  return null;
  }
}
export default Question;