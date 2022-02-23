import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from './components/Container/Container';

import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { authOperations } from './redux/auth/';

import PrivateRoute from './components/PrivateRoute.js';
import PublicRoute from './components/PublicRoute';

import Hometab from './components/Diagramtab/Diagramtab';

import CircularProgress from '@mui/material/CircularProgress';

import { AnimatePresence } from 'framer-motion';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const NotFoundView = lazy(() => import('./views/NotFoundView'));

export default function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense
        fallback={
          <CircularProgress
            sx={{
              position: 'absolute',
              left: '50%',
              right: 0,
              top: '20%',
              bottom: 0,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            size="100px"
          />
        }
      >
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Navigate to="/login" />} />
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
                <PublicRoute restricted redirectTo="/home/hometab">
                  <LoginView />
                </PublicRoute>
              }
            />
            <Route
              path="home/*"
              element={
                <PrivateRoute restricted redirectTo="/register">
                  <HomeView />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}
