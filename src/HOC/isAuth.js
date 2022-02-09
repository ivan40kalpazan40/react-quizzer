import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/authContext/authContext';

export const isAuth = (Component) => {
  const WrappedComponent = (props) => {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? <Component /> : <Navigate to='/auth/login' />;
  };
  return WrappedComponent;
};
