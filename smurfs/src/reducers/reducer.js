import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAIL, POST_SMURF_START, POST_SMURF_SUCCESS, POST_SMURF_FAIL } from "../actions/actions";

const initialState = {
    smurfs: [],
    error: '',
    response: '',
    isFetching: false,
    isPosting: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true,
                isPosting: false,
                error: ''
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload,
                isPosting: false,
                error: ''
            }
        case FETCH_SMURFS_FAIL:
            return {
                ...state,
                isPosting: false,
                error: 'Failed to GET'
            }
        case POST_SMURF_START:
            return {
                ...state,
                isPosting: true,
                error: ''
            }
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                isPosting: false,
                response: 'Post Successful',
                error: ''
            }
        case POST_SMURF_FAIL:
            return {
                ...state,
                isPosting: false,
                error: 'Failed to POST'
            }
        default:
            return state;
    }
}