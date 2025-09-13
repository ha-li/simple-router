import { Routes, Route, Outlet } from 'react-router-dom';
import { NavHeader } from './components/NavHeader';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';


function App() {

  return (
    <div>
      <NavHeader />
      <Routes>
        {/* / will load */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <hr />
      {/* outlet is where the contents of Link render */}
      <Outlet />
    </div>
  )
}

export default App
