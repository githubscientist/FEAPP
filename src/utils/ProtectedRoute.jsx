import { Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('user') ? true : false;
  const history = useHistory();

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          history.push('/login')
        )
      }
    />
  );
};

export default ProtectedRoute;
