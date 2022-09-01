import React from 'react'
import Home from './Home'
import {Route,Routes} from "react-router-dom"
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'

function Pages() {
  return (
    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cuisine/:type' element={<Cuisine/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/search/:searched' element={<Searched/>}></Route>
      <Route path='/recipe/:name' element={<Recipe/>}></Route>
    </Routes>
   
  )
}

export default Pages;