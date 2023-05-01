import { RouterProvider } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { router } from './routes'
function App() {
  return (
    <div className="layout">
      <Sidebar/>
      <div className="content">
      <RouterProvider router={router} />      
      </div>
    </div>
    )
}

export default App
