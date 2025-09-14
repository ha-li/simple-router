import { Outlet } from 'react-router-dom';
import { NavRoutes, NavHeader } from './components/Navigation';

function App() {

  return (
    <div>
      <div>
        <NavHeader />
        <NavRoutes />
      </div>

      {/* outlet is used by NavRoutes & NavHeader, & is where the contents of Link render */}
      <div>
        <Outlet />
      </div>

    </div>
  )
}

export default App
