import { Link } from 'react-router-dom';

export const NavHeader = () => {

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/contact">contact</Link></li>
          <li><Link to="/product">product</Link></li>
        </ul>
      </nav>
      <hr />
    </div>
  )
};

