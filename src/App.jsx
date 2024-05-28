import './App.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import About from './pages/about'
import Blog from "./pages/blog"
import Breakfast from "./pages/breakfast"
import Dinner from "./pages/dinner"
import Home from "./pages/home"
import Login from "./pages/login"
import Lunch from "./pages/lunch"
import Navigation from './components/navigation'
import Register from "./pages/register"
import { useState } from "react"

//import reactLogo from './assets/react.svg'
//import { RouterProvider } from 'react-router-dom'

//import viteLogo from '/vite.svg'

function App() {

  const [dropdown, setDropdown] = useState(false);
    const [show, setShow] = useState(false);

    const Showbtn = () => setShow(true);
    const Closebtn = () => setShow(false);
    const Showdropdown = () => setDropdown(!dropdown);
    const Hidedropdown = () => setDropdown(false);



  return (
    <>
      <Router>
            <Navigation
                show={show}
                dropdown={dropdown}
                Showbtn={Showbtn}
                Closebtn={Closebtn}
                Showdropdown={Showdropdown}
                Hidedropdown={Hidedropdown}
            />
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
