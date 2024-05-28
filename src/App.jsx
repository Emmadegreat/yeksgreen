import './App.css'

import Footer from './components/footer'
import Navigation from './components/navigation'
import Router from './route/routes'
//import reactLogo from './assets/react.svg'
import { RouterProvider } from 'react-router-dom'

//import viteLogo from '/vite.svg'

function App() {


  return (
    <>
      <Navigation/>
      <RouterProvider router={Router} >
        </RouterProvider>

    </>
  )
}

export default App
