import {SEARCH_MOVIE, 
        START_REQUEST, 
        FETCH_MOVIES_SUCCESS, 
        FETCH_MOVIES_FAILURE, 
        START_MOVIE,
        FETCH_MOVIE} from './types';
import axios from 'axios';
import {API_KEY} from '../apiKey';

export const searchMovie = text => {
        return{
            type: SEARCH_MOVIE,
            payload: text
        }
}

const startRequest = () => {
    return {
        type: START_REQUEST,
        payload: true
    }
}

export const fetchMovies = text => {
    return async function(dispatch){
        if(text != '' && text != null){
            dispatch(startRequest());
             try{
                const {data} = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${text}`);
                const {Search} = data;
                if(Search){
                    dispatch({
                        type: FETCH_MOVIES_SUCCESS,
                        payload: Search
                    })
                }     
                else {
                    dispatch({
                        type: FETCH_MOVIES_FAILURE,
                        payload: data.Error
                    })
                }       
             }        
             catch(e){}
        }        
    }                      
}

export const fetchMovie = id => {
    return async function(dispatch){
        dispatch({
            type: START_MOVIE,
            payload: true

        })
        try{
            const {data} = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
            dispatch({
                type: FETCH_MOVIE,
                payload : data
            })
        }
        catch(e){}      
    }
}
