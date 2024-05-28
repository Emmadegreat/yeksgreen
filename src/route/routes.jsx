import About from "../pages/about"
import Blog from "../pages/blog"
import Breakfast from "../pages/breakfast"
import Dinner from "../pages/dinner"
import Home from "../pages/home"
import Login from "../pages/login"
import Lunch from "../pages/lunch"
import Register from "../pages/register"
import { createBrowserRouter } from "react-router-dom"

const Router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: 'about', element: <About /> },
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },
    { path: '/blog', element: <Blog /> },
    { path: '/breakfast', element: <Breakfast /> },
    { path: '/lunch', element: <Lunch /> },
    {path: '/dinner', element: <Dinner/>},
])

export default Router