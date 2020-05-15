import React, { useEffect } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/actions';
import AddSmurf from './AddSmurf';

const mapStateToProps = state => {
    console.log(state);
    return {
        smurfs: state.smurfs,
        error: state.error,
        response: state.response
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
                <hr />
              </div>
            )
        })}
        <AddSmurf />
        {props.response ? <p>{props.response}</p> : null}
        {props.error ? <p>{props.error}</p> : null}
      </div>
    );
}

export default connect(mapStateToProps, {getSmurfs})(App);
