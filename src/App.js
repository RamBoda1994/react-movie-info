import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.css';
import Landing from './components/home/Landing';
import {Provider} from 'react-redux';
import store from './store';
import MovieDetails from './components/home/MovieDetails';

class App extends React.Component {
  
  render(){
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
              <Navbar />
              <Route exact path="/" component={Landing}/>
              <Route exact path="/movies/:id" component={MovieDetails} />
              <Footer />
          </React.Fragment>
        </Router>        
      </Provider>
    )
  }
}

export default App;