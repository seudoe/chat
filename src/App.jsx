// import { useState } from 'react'
import { Routes, Route } from 'react-router'

import './App.css'

import { msgs } from './utils/db.js'
import HomePage from './pages/Homepage.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={ <HomePage msgs={msgs} /> } ></Route>
    </Routes>
  )
}

export default App
