import React from 'react';
import {connect} from 'react-redux';
import {searchMovie, fetchMovies} from '../../actions/searchActions';

class SearchForm extends React.Component {
    
    onChange = event => {
        this.props.searchMovie(event.target.value);
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.fetchMovies(this.props.text);
    }
    render(){
        const {text} = this.props;

        return(
            <form onSubmit={this.onSubmit} id="searchForm">
                <h3>Search for Movies and TV Shows</h3>
                <div className="form-group">
                    <input 
                        type="text" 
                        value={text}
                        className="form-control-search" 
                        placeholder="Search here"
                        onChange={this.onChange}
                    /> 
                </div>
                <button 
                    type="submit" 
                    className="btn btn-dark"
                >Search
                </button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        text: state.movies.text
    }  
}

const mapDispatchToProps = dispatch => {
    return {
        searchMovie: text => dispatch(searchMovie(text)),
        fetchMovies: text => dispatch(fetchMovies(text))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);