import './App.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import About from './pages/about'
import Blog from "./pages/blog"
import Breakfast from "./pages/breakfast"
import Dinner from "./pages/dinner"
import Home from "./pages/home"
import Login from "./pages/login"
import Lunch from "./pages/lunch"
import Register from "./pages/register"

function App() {

  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/breakfast" element={<Breakfast />} />
                <Route path="/lunch" element={<Lunch />} />
                <Route path="/dinner" element={<Dinner />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
