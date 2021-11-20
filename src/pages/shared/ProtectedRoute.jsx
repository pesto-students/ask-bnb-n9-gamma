import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  console.log('this', isAuthenticated);
  const currentLocation = useLocation();
  console.log(currentLocation.pathname);
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { referrer: currentLocation.pathname },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
