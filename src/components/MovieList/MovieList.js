import React, {Fragment} from 'react';

import MovieItem from '../../components/MovieItem/MovieItem'

const MovieList = (props) => {
  const renderMovies = props.movies.map(movie => (
    <MovieItem title={movie.title} remove={()=>props.remove(movie.id)} key={movie.id}/>
  ));
  return (
    <Fragment>
      <h3>Too watch list</h3>
      <ul className="list-group">
        {renderMovies}
      </ul>
    </Fragment>
  );
};

export default MovieList;