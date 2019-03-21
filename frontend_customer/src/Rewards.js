import React, {Component} from 'react';
import axios from 'axios'; 
import Statusbar from './Statusbar.js'
import Table from 'react-bootstrap/Table'


class Rewards extends Component {
  constructor(){
    super()
    this.state = {
      results: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/results/', {
      params: {
        customer_id: 1
      }
    })
    .then(res => {
        this.setState({
         results: res.data.results
        })
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    if (!this.state.results) {
      return (<div>Loading....</div>)
    } else {
      return(
        <div>
          <Statusbar/>
          <div style={{marginLeft:'13em'}} >
            <h2 style={{color:'white', padding:'1em', marginTop:'1em', fontWeight:'bold', textShadow:'2px 2px black' }} >My Rewards</h2>
              <Table striped bordered hover variant="dark" style={{width:'80%', border:'1px solid black'}} >
                <thead style={{height:'1em'}}>
                    <tr>
                      <th>#</th>
                      <th>Restaurant</th>
                      <th>Reward</th>
                      <th>Recommended Dish</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.results.map((result, idx) => (
                      <tr>
                        <td>{idx + 1}</td>
                        <td>{result.restaurant.name}</td>
                        <td>{result.restaurant.reward}</td>
                        <td><img alt='food' src={result.dish[0].image} width="200" height="150" /><br/> {result.dish[0].name}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
        </div>
      );
    }
  }
}

export default Rewards

