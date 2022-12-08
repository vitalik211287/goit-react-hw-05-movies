import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/ApiService';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getTrendingMovies()
      .then(res => setTrendingMovies(res))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {loading && <Loader />}
      {trendingMovies && <MovieList movies={trendingMovies} />}
    </>
  );
};
export default Home;
