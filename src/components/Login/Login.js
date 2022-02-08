import { useContext } from 'react';
import AuthContext from '../../context/authContext/authContext';

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get('username');
    const password = data.get('password');
    login({ username, password });
    e.target.reset();
  };
  return (
    <div className='center container'>
      <h1>Login</h1>

      <form className='col s12' method='POST' onSubmit={handleFormSubmit}>
        <div className='row'>
          <div className='input-field col s10'>
            <input
              id='username'
              name='username'
              type='text'
              className='validate'
            />
            <label htmlFor='username'>Username</label>
          </div>

          <div className='row'>
            <div className='input-field col s10'>
              <input
                id='password'
                name='password'
                type='password'
                className='validate'
              />
              <label htmlFor='password'>Password</label>
            </div>
          </div>
        </div>
        <button className='waves-effect waves-light btn'>Login</button>
      </form>
    </div>
  );
};

export default Login;
