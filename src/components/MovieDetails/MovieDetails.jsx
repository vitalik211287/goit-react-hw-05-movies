import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getSerchMoviesId } from 'services/ApiService';
import Loader from 'components/Loader/Loader';
import {
  BackLink,
  Content,
  DetailWrapper,
  IconArrowLeft,
  Label,
  LinkList,
  ScoreLabel,
  StyledLink,
  Text,
  Thumb,
} from './MovieDetails.styled';
import { Container } from 'components/App.styled';
import noImg from '../../img/no_img-1000x1000.jpg'

export const MoviesDetails = () => {
  const movieId = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovieId] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    getSerchMoviesId(movieId.movieId)
      .then(setMovieId)
      .finally(() => setLoading(false));
  }, [movieId]);

  if (!movie) {
    return <>{loading && <Loader />}</>;
  }
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w780';
  const imgUrl = poster_path ? (
    `${IMAGE_BASE_URL}/${poster_path}`
  ) : (
    noImg
  );
  const releaseDate = release_date.slice(0, 4);
  const voteAverage = Math.floor(vote_average * 10);
  const genresStr = genres.map(genre => genre.name).join(' ');
  const backLink = location.state?.from ?? '/movies';

  return (
    <Container>
      <BackLink to={backLink}>
        <IconArrowLeft />
        Go back
      </BackLink>
      <DetailWrapper>
        <Thumb>
          <img src={imgUrl} alt={title} width="300" />
        </Thumb>
        <Content>
          {title && (
            <h1>
              {title} ({releaseDate ? releaseDate : 'N/A'})
            </h1>
          )}

          <p>
            <ScoreLabel>User score:</ScoreLabel>
            {voteAverage ? voteAverage + '%' : 'No information'}
          </p>

          <p>
            <Label>Overview</Label>
            {overview ? overview : 'No information'}
          </p>

          <p>
            <Label>Genres</Label>
            {genresStr ? genresStr : 'No information'}
          </p>
        </Content>
      </DetailWrapper>
      <Text >Additional information </Text>
      <LinkList>
        <li>
          <StyledLink to="cast" state={{ from: backLink }}>
            Cast
          </StyledLink>
        </li>
        <li>
          <StyledLink to="reviews" state={{ from: backLink }}>
            Reviews
          </StyledLink>
        </li>
      </LinkList>
      <Outlet />
    </Container>
  );
};
export default MoviesDetails;
