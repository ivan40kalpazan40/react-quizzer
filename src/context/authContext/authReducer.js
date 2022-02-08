export default (state, action) => {
  switch (action.type) {
    case 'LOAD_USER':
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case 'USER_LOGIN':
    case 'USER_REGISTER':
      localStorage.setItem(`token`, action.payload);
      return {
        ...state,
        loading: false,
        token: action.payload,
        isAuthenticated: true,
      };
    case 'LOGIN_ERROR':
    case 'REGISTER_ERROR':
      localStorage.removeItem('token');
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        token: null,
        user: null,
        error: action.payload,
      };
    case 'CLEAR_ERRORS':
      return { ...state, error: null };
    default:
      return state;
  }
};
