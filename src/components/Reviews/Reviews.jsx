import { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/ApiService';
import { Author, AuthorTitle, P, ReviewsItem, ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getMovieReviews(movieId)
      .then(setReviews)
      .finally(() => setLoading(false));
  }, [movieId]);

  if (!reviews) {
    return <>{loading && <Loader />}</>;
  }
  return (
    <>
      {reviews.results.length === 0 ? (
        <P>We dont't have any reviews for this movie.</P>
      ) : (
        <ReviewsList>
          {reviews.results.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <Author>
                <AuthorTitle>Author:</AuthorTitle>{' '}
                {author ? author : 'No information'}
              </Author>
              <p>{content ? content : 'No information'}</p>
            </ReviewsItem>
          ))}
        </ReviewsList>
      )}
    </>
  );
};

export default Reviews;
