import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import SideBar from './components/sidebar'
import Settings from './pages/settings'
import Goal from './pages/goal'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register/>}></Route>
          <Route path='app' element={<SideBar/>}>
            <Route path='home' element={<Home />}></Route>
            <Route path='configuracao' element={<Settings />}></Route>
            <Route path='metas' element={<Goal />}></Route>
            <Route path='audio' element={<Home />}></Route>
          </Route> 
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
