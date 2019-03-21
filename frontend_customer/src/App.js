import React, { Component } from 'react'
import Map from './Map.js'
import Quiz from './Quiz'
import Result from './Result';
import CustomerLogin from './CustomerLogin'
import Rewards from './Rewards.js'
import background from "./images/foodbackground.jpg";
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Switch } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App" style={{height:'100vh', backgroundImage:"url("+background+")", backgroundSize: 'cover',  backgroundAttachment: 'fixed', fontFamily:'Noto Sans TC' }}>
        <Router>
            <Switch>
              <Route path="/login" component={CustomerLogin} />  
              <Route path="/maps" component={Map} />
              <Route path="/restaurant/:restaurant_id/quiz/:quiz_id" component={Quiz} />
              <Route path="/rewards" component={Rewards} />
              <Route path="/results/:id" component={Result} />
            </Switch>
        </Router>
      </div>
    );
  }
}
export default App

