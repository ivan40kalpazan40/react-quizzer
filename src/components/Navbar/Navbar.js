import { useContext } from 'react';
import AuthContext from '../../context/authContext/authContext';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const { isAuthenticated, user, token } = useContext(AuthContext);
  return (
    <nav>
      <div className='nav-wrapper '>
        <Link to='/' className='brand-logo'>
          qzrr |
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          {token ? (
            <>
              <li>
                <Link to='/categories'>Quizz Categories</Link>
              </li>
              <li>
                <Link to='/auth/logout'>Logout</Link>
              </li>
              <li>| {user?.username} |</li>{' '}
            </>
          ) : (
            <>
              {' '}
              <li>
                <Link to='/auth/login'>Login</Link>
              </li>
              <li>
                <Link to='/auth/register'>Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
