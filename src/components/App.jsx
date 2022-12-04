import Home from '../pages/Home/Home';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import { Layout } from './Layout/Layout';
import { Movies } from '../pages/Movies/Movies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          {/* <Route path="/movies/:movieId" element={<MovieDetails />}></Route> */}
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} theme="colored" />
    </Container>
  );
};
