import { Outlet, Link } from 'react-router-dom';

export const NavHeader = () => {

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/contact">contact</Link></li>
        </ul>
      </nav>

      <hr />
      {/* outlet is where the contents of Link render */}
      <Outlet />
    </div>
  )
};

