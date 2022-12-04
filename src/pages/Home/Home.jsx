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
      {console.log(trendingMovies)}
      {loading && <Loader />}
      {/* <Container> */}
      {trendingMovies && <MovieList movies={trendingMovies} />}

      {/* {trendingMovies?.total_pages && (
          <PaginatedItems
            setPage={setSearchParams}
            totalPages={trendingMovies.total_pages}
            currentPage={pageParam - 1}
          />
        )} */}
      {/* </Container> */}
    </>
  );
};
export default Home;
