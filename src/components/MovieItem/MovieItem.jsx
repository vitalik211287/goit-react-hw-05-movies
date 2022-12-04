import { NavLink, useLocation } from 'react-router-dom';
import { Img, Li, P } from './MovieItem.styled';

const MovieItem = ({
  id,
  title,
  poster_path,
  release_date,
  first_air_date,
}) => {
  const location = useLocation();
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w780';
  const imgUrl = poster_path ? `${IMAGE_BASE_URL}/${poster_path}` : 'noPoster';
  let year = '';
  if (release_date) {
    year = release_date?.slice(0, 4);
  } else {
    year = first_air_date?.slice(0, 4);
  }

  return (
    <Li key={id}>
      <NavLink to={`/movies/${id}`} state={{ from: location }}>
        <div>
          <Img src={imgUrl} alt={title} />
        </div>
        <P>
          {title ? title : 'name'}
          <span style={{ color: '#ff9000' }}> | </span>
          <span style={{ color: 'red' }}>{year}</span>
        </P>
      </NavLink>
    </Li>
  );
};
export default MovieItem;
