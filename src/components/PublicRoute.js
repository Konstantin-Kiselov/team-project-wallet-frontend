import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PublicRoute({ restricted = false, redirectTo = '/' }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return !shouldRedirect ? <Outlet /> : <Navigate to={redirectTo} />;
}
