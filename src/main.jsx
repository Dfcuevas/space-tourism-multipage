import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/errorpage/ErrorPage'
import './index.css'
import Destinations from './components/destination/Destinations'
import Crew from './components/crew/Crew'
import Technology from './components/technology/Technology'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/destinations',
    element: <Destinations />
  },
  {
    path: '/crew',
    element: <Crew />
  },
  {
    path: '/tech',
    element: <Technology />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
