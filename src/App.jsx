import { BrowserRouter, Routes,  Route } from 'react-router-dom'
import React from 'react'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import About from './Pages/About'
import Profile from './Pages/Profile'


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
      <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/profile' element={<Profile></Profile>}></Route>
    </Routes>
    </BrowserRouter>
      
  )
}
