import React from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
`;

const Main = styled.main`
  padding: 4.8rem;
  background-color: var(color-gray-300);
`;

const AppLayout = () => {
  return (
    <StyledApp>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledApp>
  );
};

export default AppLayout;
