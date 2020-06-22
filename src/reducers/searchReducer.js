import {SEARCH_MOVIE, 
        START_REQUEST, 
        FETCH_MOVIES_SUCCESS, 
        FETCH_MOVIES_FAILURE,
        FETCH_MOVIE,
        START_MOVIE} from '../actions/types';

const initialState = {
    text: '',
    loading: false,
    movies: [],
    movie: {},
    error: ''
}

const searchReducer = (state=initialState, action) => {
    switch(action.type){
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload
            }
        case START_REQUEST:
        case START_MOVIE:
            return {
                ...state,
                loading: action.payload
            }   
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload,
                loading: false,
                error: ''
            }    
        case FETCH_MOVIES_FAILURE:
            return {
                ...state,
                movies: [],
                loading: false,
                error: action.payload
            }
        case FETCH_MOVIE:
            return {
                ...state,
                movie: action.payload,
                loading: false
            }
        default:
            return state    
    }
}

export default searchReducer;