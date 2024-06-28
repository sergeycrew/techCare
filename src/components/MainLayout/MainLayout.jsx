import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container } from './MainLayout.styled';

export const MainLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
