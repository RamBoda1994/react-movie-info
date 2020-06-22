import React from 'react';
import SearchForm from './SearchForm';
import Spinner from '../layout/Spinner';
import {connect} from 'react-redux';
import MoviesContainer from './MoviesContainer';
import ErrorMessage from './ErrorMessage';

class Landing extends React.Component {
    render(){
        
        const {loading, error} = this.props;

        return (
            <div>
                <SearchForm />
                {loading ? <Spinner /> : 
                 (error ? <ErrorMessage error={error}/> : <MoviesContainer/>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.movies.loading,
        error: state.movies.error
    }
}

export default connect(mapStateToProps,null)(Landing);