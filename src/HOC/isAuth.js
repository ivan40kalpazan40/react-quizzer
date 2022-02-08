import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/authContext/authContext';

export const isAuth = (Component) => {
  const WrappedComponent = (props) => {
    const { token } = useContext(AuthContext);
    return token ? <Component /> : <Navigate to='/auth/login' />;
  };
  return WrappedComponent;
};
