import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from './AppBar/AppBar';
import Container from './Container/Container';

// const HomeView = lazy(() => import('../views/HomeView/HomeView'));
// const RegisterView = lazy(() => import('../views/RegisterView/RegisterView'));
// const LoginView = lazy(() => import('../views/LoginView/LoginView'));

export default function App() {
  // const dispatch = useDispatch();

  return (
    <Container>
      <AppBar />
    </Container>
  );
}
