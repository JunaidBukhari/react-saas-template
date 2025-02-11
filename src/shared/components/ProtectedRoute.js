import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken === btoa("test@web.com");
};

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default ProtectedRoute; 