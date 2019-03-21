import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


class Option extends Component{
  render() {

    return(
      <ListGroup.Item>
       {/* <input value={this.props.option.name} name={this.props.option.id} /> */}
       {this.props.options.map(element => {
         return <p key={element.id}>
         {element.name}
        </p>
       })}
      </ListGroup.Item>
    )
  }
}

export default Option