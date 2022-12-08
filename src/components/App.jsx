import Home from '../pages/Home/Home';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import { Layout } from './Layout/Layout';
import { Movies } from '../pages/Movies/Movies';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoviesDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MoviesDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} theme="colored" />
    </Container>
  );
};
