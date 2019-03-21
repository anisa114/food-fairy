import React, {Component} from 'react';
import { Link } from "react-router-dom";

const linkStyle = {
  color: 'white',
  textShadow:'0px 2px 2px black',
  fontSize: '20px'
}

class NavBar extends Component {
  render() {
    return (
      <div style={{display:'flex', backgroundColor:'#230f04', height:'5em'}} >
        <h3 style={{flex: '0 45%', color:'white', paddingTop:'26px', paddingLeft: '12px', fontFamily: 'Sacramento', fontSize: '40px', lineHeight: '1'}} > <span>🧚</span> <Link style={{color:'white'}} to="/restaurants/quizzes">Food Fairy</Link></h3>
        <h4 style={{ color:'white', padding:'1em 1em', width:'150px'}}>
        <Link style={linkStyle} to="/restaurants/quizzes">Quiz</Link></h4>
        <h4 style={{ color:'white', padding:'1em 0em', width:'150px'}}>
        <Link style={linkStyle} to="/restaurants/dishes">Dishes</Link></h4>
        <h4 style={{ color:'white', padding:'1em 0em', width:'150px',  whiteSpace: 'nowrap', textShadow:'0px 2px 2px black', fontSize: '20px', lineHeight: '1.9'}} > Marty's Cuisine</h4>
        <a href="http://localhost:5000/restaurants" style={{padding:'1em'}} >
          <button style={{backgroundColor: '#17a2b8', borderRadius:'5px', padding:'5px 10px', marginLeft:'7em', marginTop:'7px', color:'white', textShadow:'0px 2px 3px black'}} >Logout</button>
        </a>
      </div>
    );
  }
}

export default NavBar;

{/* <div style={{display:'flex', backgroundColor:'#230f04', height:'5em'}} >
<a href="http://localhost:5000/restaurants/quizzes" style={{flex: '0 90%', color:'white', paddingTop:'1.8em', paddingLeft:'2em', fontFamily: 'Sacramento'}}>
  <h3>🧚 Food Fairy</h3>
</a>
<h5 style={{flex: '0 15%', color:'white', padding:'1.3em 0em', width:'150px'}} >Marty's Cuisine</h5>
<a style={{padding:'1em'}} >
  <button style={{borderRadius:'5px', padding:'5px 8px', marginRight:'2em', marginTop:'7px'}} >Logout</button>
</a>
</div> */}