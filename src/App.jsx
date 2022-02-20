import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { animated, useTransition } from 'react-spring';

import Container from './components/Container/Container';

import { Routes, Route, useLocation } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute.js';
import PublicRoute from './components/PublicRoute';
import AuthNav from './components/AuthNav';
import SectionAuthNav from './components/SectionAuthNav';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const NotFoundView = lazy(() => import('./views/NotFoundView'));

export default function App() {
  // const dispatch = useDispatch();

  // add ANIMATION
  const location = useLocation();
  console.log(location);

  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <SectionAuthNav>
      {/* <Container> */}
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
          </Route>
          <Route
            path="/home/*"
            element={
              <PrivateRoute restricted redirectTo="/login">
                <HomeView />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
      {/* </Container> */}
    </SectionAuthNav>
  );
}
