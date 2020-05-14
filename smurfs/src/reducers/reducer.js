import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAIL } from "../actions/actions";

const initialState = {
    smurfs: [],
    error: '',
    isFetching: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            }
        case FETCH_SMURFS_FAIL:
            return {
                ...state,
                error: 'There was an error'
            }
        default:
            return state;
    }
}