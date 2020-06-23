import React from 'react';
import {connect} from 'react-redux';
import { fetchMovie } from '../../actions/searchActions';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';

class MovieDetails extends React.Component {

    componentDidMount(){
        this.props.fetchMovie(this.props.match.params.id);
    }    

    render(){

        const movieDetails = this.props.loading ?  <Spinner /> : (
            <div className="container">
                <img className="movie-poster" src={this.props.movie.Poster} alt="poster"/>
                <div className="details">
                    <div>
                        <label>Title :</label>
                        <h6>{this.props.movie.Title}</h6>
                    </div>
                    <div>
                        <label>Director :</label>
                        <h6>{this.props.movie.Director}</h6>
                    </div>
                    <div>
                        <label>Cast :</label>
                        <h6>{this.props.movie.Actors}</h6>
                    </div>
                    <div>
                        <label>Released On :</label>
                        <h6>{this.props.movie.Released}</h6>
                    </div>
                    <div>
                        <label>Genre :</label>
                        <h6>{this.props.movie.Genre}</h6>
                    </div>
                    <div>
                        <label>Language :</label>
                        <h6>{this.props.movie.Language}</h6>
                    </div>                                
                    <div>
                        <label>IMDB Rating :</label>
                        <h6>{this.props.movie.imdbRating}</h6>
                    </div>
                    <div>
                        <label>Production :</label>
                        <h6>{this.props.movie.Production}</h6>
                    </div>
                </div>
                <Link style={{height:"40px"}} className="btn btn-link" to="/" >Back</Link>
            </div>    
        )
        
        return(
            <React.Fragment>
                 {movieDetails}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.movies.loading,
        movie: state.movies.movie
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchMovie : id => dispatch(fetchMovie(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);