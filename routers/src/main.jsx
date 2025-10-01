import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider } from 'react-router-dom'
import router from './router/routes'


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

  </RouterProvider>  
)
