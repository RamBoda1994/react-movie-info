import React from 'react';
import {Link} from 'react-router-dom';

class MovieCard extends React.Component {
    render() {

        const { movie } = this.props;

        return (
            <div className="card" style={{border:"2px solid black", borderBottom:"9px solid brown", width: "450px",height: "240px", marginLeft:"5px", marginRight:"4px", marginTop:"4px", marginBottom:"4px"}}>
                <div className="row no-gutters">
                    <div className="col-md-7">
                        <img style={{height:"220px"}} src={movie.Poster} className="card-img" alt="Movie Cover" />
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                            <h6 className="card-title">{movie.Title}</h6>
                            <h6>Year : {movie.Year}</h6>
                        </div>
                        <Link className="btn btn-link" to={`/movies/${movie.imdbID}`}>Movie Details</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;