import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAIL = 'POST_SMURF_FAIL';

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_SMURFS_FAIL, payload: err });
        });
}

export const postSmurf = smurf => dispatch => {
    dispatch({ type: POST_SMURF_START });
    axios
        .post('http://localhost:3333/smurfs',{
            name: smurf.name,
            age: parseInt(smurf.age, 10),
            height: smurf.height,
            id: Date.now()
        })
        .then(res => {
            dispatch({ type: POST_SMURF_SUCCESS, payload: res });
        })
        .catch(err => {
            dispatch({ type: POST_SMURF_FAIL, payload: err })
        })
}