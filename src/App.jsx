import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';

import { Routes, Route, Link } from 'react-router-dom';

//import PrivateRoute from '../components/PrivateRoute.js';
import PublicRoute from './components/PublicRoute';
import AuthNav from './components/AuthNav';

// const HomeView = lazy(() => import('../views/HomeView/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const NotFoundView = lazy(() => import('./views/NotFoundView'));

export default function App() {
  // const dispatch = useDispatch();

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<p>Загружаем...</p>}>
        <Routes>
          <Route path="/" element={<AuthNav />}>
            <Route index element={<LoginView />} />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted redirectTo="/home">
                  <LoginView />
                </PublicRoute>
              }
            />

            <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
