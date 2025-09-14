import { Outlet } from 'react-router-dom';
import { NavHeader } from './components/navigation/NavHeader';
import { NavRoutes } from './components/navigation/NavRoutes';

function App() {

  return (
    <div>
      <div>
        <NavHeader />
        <NavRoutes />
      </div>

      {/* outlet is where the contents of Link render */}
      <div>
        <Outlet />
      </div>
      
    </div>
  )
}

export default App
