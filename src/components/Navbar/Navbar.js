import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <div className='nav-wrapper '>
        <Link to='/' className='brand-logo'>
          qzrr |
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/categories'>Quizz Categories</Link>
          </li>
          <li>
            <a href='#'>Components</a>
          </li>
          <li>
            <a href='collapsible.html'>JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
