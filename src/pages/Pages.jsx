import React from 'react'
import Home from './Home'
import {Route,Routes} from "react-router-dom"
import Cuisine from './Cuisine'

function Pages() {
  return (
    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cuisine/:type' element={<Cuisine/>}></Route>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
   
  )
}

export default Pages;