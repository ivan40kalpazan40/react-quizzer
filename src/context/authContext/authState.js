import { useReducer } from 'react';
import authReducer from './authReducer';
import AuthContext from './authContext';

const AuthStateProvider = (props) => {
  const initialState = {
    isAuthenticated: false,
    loading: true,
    token: localStorage.getItem('token'),
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // loadUser
  const loadUser = async () => {
    let headers = { 'Content-Type': 'application/json' };
    if (localStorage.token) {
      headers['x-auth-token'] = localStorage.token;
    } else {
      headers['x-auth-token'] = null;
    }
    try {
      const res = await fetch('/auth', { headers });
      const user = await res.json();
      dispatch({ type: 'LOAD_USER', payload: user });
    } catch (err) {
      console.log(err.message);
      dispatch({ type: 'AUTH_ERROR' });
    }
  };

  // Log user
  const login = async (formData) => {
    try {
      const res = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const resolved = await res.json();
      if (!res.ok) throw new Error(resolved);
      const token = await resolved;
      dispatch({ type: 'USER_LOGIN', payload: token });
      loadUser();
    } catch (err) {
      console.log(`Login error from state `, err.message);
      dispatch({ type: 'LOGIN_ERROR', payload: err.message });
    }
  };

  // register user
  const register = async (formData) => {
    try {
      const res = await fetch(`/auth/register`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });
      const response = await res.json();
      if (!res.ok) throw new Error(response);
      console.log(`success response from register`, response);
      dispatch({ type: 'USER_REGISTER', payload: response });
    } catch (err) {
      console.log(`Register error from state: `, err.message);
      dispatch({ type: 'REGISTER_ERROR', payload: err.message });
    }
  };

  // clear errors
  const clearErrors = () => dispatch({ type: 'CLEAR_ERRORS' });

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        token: state.token,
        user: state.user,
        error: state.error,
        login,
        register,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthStateProvider;
