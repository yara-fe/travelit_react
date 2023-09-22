import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Import Pages
import HomePage from './pages/HomePage'
import ItineraryPage from './pages/ItineraryPage'
import RewardsPage from './pages/RewardsPage'
import UserProfile from './pages/UserProfile'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './components/AuthProvider'

//Import Components
import NavBar from './components/NavBar/NavBar'

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/itinerary/:id", element: <ItineraryPage /> },
      { path: "/rewards", element: <RewardsPage /> },
      { path: "/login", element: <LoginPage /> },
      // { path: "/itinerary", element: <ItineraryPage /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
