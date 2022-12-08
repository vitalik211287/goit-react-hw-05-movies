import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { getSerchMovies } from 'services/ApiService';
import MovieSearchForm from 'MovieSeorchForm/MovieSearchForm';
import MovieList from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [serchMovies, setSerchMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query') ?? '';

 
  const formSubmitHandler = pageName => {
    setSearchParams({ query: pageName });
  };

  useEffect(() => {
    if (queryParam === '') {
      return;
    }
    setLoading(true);
    getSerchMovies(queryParam)
      .then(res => setSerchMovies(res))
      .finally(() => setLoading(false));
  }, [queryParam]);
  return (
    <>
      {serchMovies && <MovieSearchForm onSubmit={formSubmitHandler} />}
      {loading && <Loader />}
      {<MovieList movies={serchMovies} />}
    </>
  );
};
export default Movies;
