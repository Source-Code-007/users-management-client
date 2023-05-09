import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutOne from './Layout/LayoutOne.jsx'
import Homepage from './Components/Homepage/Homepage.jsx'
import Users from './Components/Users/Users'
import User from './Components/User/User'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutOne></LayoutOne>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: ()=> fetch("https://user-management-server-nu.vercel.app/users")
      },
      {
        path: '/user/:id',
        element: <User></User>,
        loader: ({params})=> fetch(`https://user-management-server-nu.vercel.app/user/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)
