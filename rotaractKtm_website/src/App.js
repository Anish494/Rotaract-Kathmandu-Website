import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/events",
      element: <Events />
    },
    {
      path: "/gallery",
      element: <Gallery />
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
