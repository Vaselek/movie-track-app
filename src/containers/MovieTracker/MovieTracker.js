import React, {Component} from 'react';
import AddMovie from "../../components/AddMovie/AddMovie";
import MovieList from "../../components/MovieList/MovieList";

import './MovieTracker.css';

class MovieTracker extends Component {
  state = {
    movies: [
      {title: 'Hello, guys', id: 0},
      {title: 'Hello, guys', id: 1},
    ],
    lastId: 1,
    currentMovie: {
      title: '',
      id: null
    }
  };

  componentDidMount() {
    this.setState(JSON.parse(window.localStorage.getItem('state')));
  }

  removeMovie = (id) => {
    debugger;
    let oldMovies = [...this.state.movies];
    let movies = oldMovies.filter(movie => movie.id !== id);
    this.setState({movies});
    window.localStorage.setItem('state', JSON.stringify({...this.state, movies}));
  };

  addMovie = () => {
    let movies = [...this.state.movies];
    let movie = {...this.state.currentMovie};
    movies.push(movie);
    let currentMovie = {title: '', id: null};
    this.setState({movies, currentMovie});
    window.localStorage.setItem('state', JSON.stringify({...this.state, movies, currentMovie}));
  };

  updateCurrentMovie = (e) => {
    let currentMovie = {...this.state.currentMovie};
    let title = e.target.value;
    let lastId = this.state.lastId + 1;
    currentMovie.title = title;
    currentMovie.id = lastId;
    this.setState({currentMovie, lastId});
  };

  render() {
    return (
      <div className="indent">
        <AddMovie
          title={this.state.currentMovie.title}
          onClick={()=>this.addMovie()}
          onChange={(e)=>this.updateCurrentMovie(e)
         }/>
        <MovieList remove={this.removeMovie}
                   movies={this.state.movies}
        />
      </div>
    );
  }
}

export default MovieTracker;