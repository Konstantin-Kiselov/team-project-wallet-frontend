import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';

import { Routes, Route } from 'react-router-dom';

//import PrivateRoute from '../components/PrivateRoute.js';
import PublicRoute from './components/PublicRoute';
import AuthNav from './components/AuthNav';

// const HomeView = lazy(() => import('../views/HomeView/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));

export default function App() {
  // const dispatch = useDispatch();

  return (
    <Container>
      <AppBar />

      <AuthNav />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Routes>
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted redirectTo="/home">
                <LoginView />
              </PublicRoute>
            }
          />

          {/*<Route>
              <NotFoundPage />
            </Route>*/}
        </Routes>
      </Suspense>
    </Container>
  );
}