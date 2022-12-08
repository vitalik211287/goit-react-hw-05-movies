import MovieItem from "components/MovieItem/MovieItem";
import React from 'react';
import { Item } from "./MovieList.styled";
import PropTypes from 'prop-types';


const MovieList = ({ movies }) => {
    return (
      <Item>
        {movies.map(movies => (
          <MovieItem key={movies.id} {...movies} />
        ))}
      </Item>
    );
};

MovieList.ptopTypes = {
  movies: PropTypes.array,
};
export default MovieList;