import { Outlet } from 'react-router-dom';
import { NavRoutes, NavHeader } from './components/Navigation';
import './App.css'

function App() {

  return (
    <div>
      <div className="container">
        <aside>
           <NavHeader />
        </aside>
        
        <NavRoutes />
        
        <main>
         <Outlet />
        </main>
      </div>

    </div>
  )
}

export default App
