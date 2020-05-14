import React from "react";
import "./App.css";
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/actions';

const mapStateToProps = state => {
    console.log(state);
    return {
        smurfs: state.smurfs
    }
}

const App = props => {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <br />
        <button onClick={props.getSmurfs}>Get Smurfs</button>
        <br />
        {props.smurfs.map(smurf => {
            return(
              <div key={smurf.id}>
                <h2>{smurf.name}</h2>
                <h4>{smurf.age}</h4>
                <h4>{smurf.height}</h4>
              </div>
            )
        })}
      </div>
    );
}

export default connect(mapStateToProps, {getSmurfs})(App);
