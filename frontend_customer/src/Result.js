import React, {Component} from 'react';

import axios from 'axios'; 
import Card from 'react-bootstrap/Card'
import Statusbar from './Statusbar.js'
import './style.css'



class Result extends Component {

    constructor(){
        super()
        this.state = {
            dishName: "",
            dishImage: "",
            restaurant: ""
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/results/${id}`)
        .then(response => {
            let dishName = response.data.dish[0].name
            let dishImage = response.data.dish[0].image
            let restaurant = response.data.restaurant.name
            
            this.setState({dishName, dishImage, restaurant})
        })
    }

    render() {
        return (
            <div>
                <Statusbar/>
                <Card id='card'  border="secondary" style={{ width: '30rem', marginTop:'5em' }}>
                    <Card.Header id='reward'>Based off your preferences, we recommend you try this dish</Card.Header>
                    <Card.Body>
                        <Card.Title id='mainheader'><h4>{this.state.dishName}</h4></Card.Title>
                        <Card.Text id='dishname'>
                        <div>
                            <img id="image" src={this.state.dishImage}/>
                        </div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Header id='reward'>Visit the <a href="/rewards">Rewards Page</a> to see all your Results</Card.Header>
                </Card>
            </div>
        );
    }



}

export default Result