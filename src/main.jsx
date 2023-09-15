import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Import Pages
import HomePage from './pages/HomePage'
import ItineraryPage from './pages/ItineraryPage'
import RewardsPage from './pages/RewardsPage'
import UserProfile from './pages/UserProfile'

//Import Components
import NavBar from './components/NavBar'

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/itinerary/:id", element: <ItineraryPage /> },
      { path: "/rewards", element: <RewardsPage /> },
      // { path: "/itinerary", element: <ItineraryPage /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
