import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './Components/MainPage.jsx'
import JoinRoom from './Components/JoinRoom.jsx'
import CreateRoom from './Components/CreateRoom.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "/JoinRoom",
        element: <JoinRoom />
      },

      {
        path: "/CreateRoom",
        element: <CreateRoom />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
