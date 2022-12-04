// import { Movie } from './Movies.styled';

// export const Movies = () => {
//   return <Movie>Bye world</Movie>;
// };

import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { getSerchMovies } from 'services/ApiService';
import MovieSearchForm from 'MovieSeorchForm/MovieSearchForm';
import MovieList from 'components/MovieList/MovieList';

export const Movies = () => {
  const [serchMovies, setSerchMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageName, setPageName] = useState('');
 
    const formSubmitHandler = pageName => {
    setPageName(pageName);
    };

console.log(pageName);

  useEffect(() => {
    console.log(pageName);
    if (pageName === '') {
      return;
    }
    setLoading(true);
    getSerchMovies(pageName)
      .then(res => setSerchMovies(res))
      .finally(() => setLoading(false));
  }, [pageName]);
  return (
    <>
      {loading && <Loader />}
      {/* <Container> */}
      {serchMovies && <MovieSearchForm onSubmit={formSubmitHandler} />}
      {<MovieList movies={serchMovies} />}
      {console.log(serchMovies)};
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
export default Movies;
