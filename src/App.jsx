// import { useState } from 'react'
import { Routes, Route } from 'react-router'

import './App.css'

// import { msgs } from './utils/connector.js'
import HomePage from './pages/Homepage.jsx'
import LoginPage from './pages/LoginPage.jsx'

function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <Routes>
      <Route path='/' element={ <HomePage /> } ></Route>
      <Route path='/login' element={ <LoginPage /> }></Route>
    </Routes>
  )
}

export default App
