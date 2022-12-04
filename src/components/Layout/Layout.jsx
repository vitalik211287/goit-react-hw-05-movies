import { AppBar } from 'components/AppBar/AppBar';
import { Header } from 'components/AppBar/AppBar.styled';



import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header>
        <AppBar />;
      </Header>
      <Outlet />
    </>
  );
};
