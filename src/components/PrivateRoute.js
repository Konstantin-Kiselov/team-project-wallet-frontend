import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PrivateRoute({ redirectTo, children, ...routePropps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routePropps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
