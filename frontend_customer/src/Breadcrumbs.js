import React, {Component} from 'react';
import Badge from 'react-bootstrap/Badge'

class Breadcrumbs extends Component {
  render() {
    return (
        <Badge pill variant="dark">
          {this.props.currentQuestion}/{this.props.totalQuestions}
        </Badge>
    );
  }
}
export default Breadcrumbs;
