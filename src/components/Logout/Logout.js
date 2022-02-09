import { useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../context/authContext/authContext';

const Logout = () => {
  const { logout } = useContext(AuthContext);
  useEffect(() => {
    logout();
  }, []);
  return <Navigate to='/auth/login' />;
};

export default Logout;
