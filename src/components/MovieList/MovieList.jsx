import MovieItem from "components/MovieItem/MovieItem";
import React from 'react';
import { Item } from "./MovieList.styled";

const MovieList = ({ movies }) => {
    return (
      <Item>
        {movies.map(movies => (
          <MovieItem key={movies.id} {...movies} />
        ))}
      </Item>
    );
};


export default MovieList;