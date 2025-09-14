import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { ProductsPage } from './ProductsPage'
import { ProductDetail } from './ProductDetail'
import { ErrorPage, NotFoundPage } from './ErrorPage';

/**
 * Navigation contains the components used for navigating this app.
 * 1. NavHeader - the list of nav links
 * 2. NavRoutes - a standard react browser router
 */

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
    </div>
  )
};


export const NavRoutes = () => {
  return (
    <Routes>
      {/* / will load */}
      <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
      <Route path="/about" element={<About />} errorElement={<ErrorPage /> }/>
      <Route path="/contact" element={<Contact />} errorElement={<ErrorPage /> }/>
      <Route path="/product" element={<ProductsPage />} errorElement={<ErrorPage /> }/>
      <Route path="/product/:id" element={<ProductDetail />} errorElement={<ErrorPage /> }/>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}