import { Routes, Route } from 'react-router-dom';
import { Home } from '../Home';
import { About } from '../About';
import { Contact } from '../Contact';
import { ProductsPage } from '../ProductsPage'
import { ProductDetail } from '../ProductDetail'
import { ErrorPage, NotFoundPage } from '../ErrorPage';

export const NavRoutes = () => {
  return (
    <Routes>
      {/* / will load */}
      <Route path="/" element={<Home />} errorElement={<ErrorPage /> }/>
      <Route path="/about" element={<About />} errorElement={<ErrorPage /> }/>
      <Route path="/contact" element={<Contact />} errorElement={<ErrorPage /> }/>
      <Route path="/product" element={<ProductsPage />} errorElement={<ErrorPage /> }/>
      <Route path="/product/:id" element={<ProductDetail />} errorElement={<ErrorPage /> }/>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}