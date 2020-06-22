import React from 'react';
import {connect} from 'react-redux';
import MovieCard from './MovieCard';

class MoviesContainer extends React.Component {
    render(){
        const {movies} = this.props;

        const content = movies.length ? (
            movies.map((movie, index) => <MovieCard key={index} movie={movie}/>)
        ) : null

        return(
            <div className="row">
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies.movies
    }
}

export default connect(mapStateToProps, null)(MoviesContainer);