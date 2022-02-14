import { useEffect, lazy, Suspense } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
import PublicRoute from './PublicRoute';

// const HomeView = lazy(() => import('../views/HomeView/HomeView'));
// const RegisterView = lazy(() => import('../views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView/LoginView'));

export default function App() {
  // const dispatch = useDispatch();

  return (
    <Container>
      <AppBar />
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute restricted redirectTo="/transactions/user">
              <LoginView />
            </PublicRoute>
          }
        />
      </Routes>
    </Container>
  );
}
