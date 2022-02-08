import { useContext } from 'react';
import AuthContext from '../../context/authContext/authContext';

const Register = () => {
  const { register } = useContext(AuthContext);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get('username');
    const password = data.get('password');
    const confirmPassword = data.get('confirmPassword');
    register({ username, password, confirmPassword });
    e.target.reset();
  };

  return (
    <div className='center container'>
      <h1>Register</h1>
      <form className='col s12' method='POST' onSubmit={handleFormSubmit}>
        <div className='row'>
          <div className='input-field col s10'>
            <input
              id='username'
              type='text'
              name='username'
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
          <div className='row'>
            <div className='input-field col s10'>
              <input
                id='confirmPassword'
                name='confirmPassword'
                type='password'
                className='validate'
              />
              <label htmlFor='confirmPassword'>Confirm Password</label>
            </div>
          </div>
        </div>
        <button className='waves-effect waves-light btn'>Register</button>
      </form>
    </div>
  );
};

export default Register;
