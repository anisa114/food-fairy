import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import axios from 'axios'
import Statusbar from "./Statusbar.js";
import { BrowserRouter as Router, Link } from "react-router-dom";


const mapStyles = {
  width: '80%',
  height: '70%',
  marginLeft: '9em'
};

const imageStyle = {
    width: '200px',
    height: '150px',
    paddingBottom:'5px'
}

export class MapContainer extends Component {
  state = {
      showingInfoWindow: false,  //Hides or the shows the infoWindow
      activeMarker: {},          //Shows the active marker upon click
      selectedPlace: {},   //Shows the infoWindow to the selected place upon a marker
      restaurants : [],
      activeUser: 1,
      quizResults: [],
      completedQuizzes: [],
      //RESTAURANT IDs THAT HAVE CREATED A QUIZ
      availableQuizzes: []
    };

  //   After the component is mounted, fetch the data from the backend
  componentDidMount() {
    axios.get("http://localhost:3000/restaurants")
    .then(response => {
      this.setState({restaurants: response.data})
    })
    .catch(error => console.log(error))

    axios.get('/results')
    .then(response => {
      this.setState({ quizResults: response.data.results }, this.getResultsForUser)
    })
    .catch(error => console.log(error))

    axios.get('/quizzes')
    .then(response => {
      response.data.quizzes.map((quiz) => this.setState({availableQuizzes: this.state.availableQuizzes.concat(quiz.restaurant_id) }))
    })
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
  });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  getResultsForUser = () => {
    this.state.quizResults.map((result) => {
      if (result.customer_id === this.state.activeUser) {
        //STILL ASSUMING QUIZ ID === RESTO ID
        this.setState({ completedQuizzes: this.state.completedQuizzes.concat(result.restaurant.id) })
      }
    return true
    })
  }

  render() {
      let to = `/restaurant/${this.state.selectedPlace.id}/quiz/${this.state.selectedPlace.id}`
      return (
        <div>
        <Statusbar/>
        <h6 style={{ color:'white', padding:'0.5em', textShadow:' 0px 2px 2px black', backgroundColor:'#3d100d', border:'1px solid black', margin:'2em auto 1em', borderRadius:'10px', width:'25%' }} >Choose a restaurant to start earning rewards!</h6>
        <Map
          google={this.props.google}
          zoom={17}
          style={mapStyles}
          initialCenter={{
            lat: 43.6433,
            lng: -79.3994
          }}
        >
        { this.state.restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.id}
              onClick={this.onMarkerClick}
              name= {restaurant.name} 
              id = {restaurant.id}
              image = {restaurant.image}
              streetAddress = {restaurant.address}
              description = {restaurant.description}
              position = {
                {
                  lat : restaurant.latitude,
                  lng : restaurant.longitude
                }
              }
            />
          ) 
        }) }
        
          <InfoWindow
          marker={this.state.activeMarker} 
          visible={this.state.showingInfoWindow} 
          onClose={this.onClose} >
            <div>
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
                <h6>{this.state.selectedPlace.streetAddress}</h6>
                <img style={imageStyle} alt="" src={this.state.selectedPlace.image}/>
                <br/>
                <i>{this.state.selectedPlace.description}</i>
              </div>
              {this.state.activeMarker && !this.state.availableQuizzes.includes(this.state.activeMarker.id) && 
              <div style={{paddingTop:'10px'}} >
                There is currently no quiz for this restaurant.
                <br/>
                Please check back at a later time.
              </div>
              }
              {this.state.activeMarker && !this.state.completedQuizzes.includes(this.state.activeMarker.id) && this.state.availableQuizzes.includes(this.state.activeMarker.id) &&
                <div style={{paddingTop:'10px'}} >
                  <Router>
                    <Link to={to}>Take Quiz</Link>
                  </Router>
                </div>
              }
              {this.state.activeMarker && this.state.completedQuizzes.includes(this.state.activeMarker.id) && 
              <div style={{padding:'10px 0 0'}} >
                  Oops, seems you've already completed this quiz!
                  <br/>
                  Please check
                  <Router>
                    <Link to={'/rewards'}> MyRewards </Link>
                  </Router>
                  to view your rewards.
              </div>
              }
            </div>
          </InfoWindow>
        </Map>
        </div>
      );
    }
  }
    
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDF0n1daTVqgT7582-gLCO-GOsUgsF2-LQ'
})(MapContainer);