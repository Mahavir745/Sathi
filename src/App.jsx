import React from 'react'
import "./App.css"
import Header from './component/Header/Header'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App