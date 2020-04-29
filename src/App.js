import React, {Component} from 'react';
import './App.css';
import Form from './Form'
import Show from './Show'

class App extends Component {
  state = {
    movies: [],
  }

  addNewMovie = moviedata => {
    this.setState(prevState => ({
      movies: [...prevState.movies, moviedata]
    }));
  };

  render(){
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <h2 style={{color: "white"}}>Movie Checker</h2>
        </nav>
        <Form submit={this.addNewMovie}/>
        <Show movies={this.state.movies}/>
      </div>
    );  
 }  

}

export default App;
