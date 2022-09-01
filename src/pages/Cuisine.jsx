import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import styled from 'styled-components'
import { Link ,useParams } from 'react-router-dom'
function Cuisine() {
const [cuisine,setCuisine]=useState([]);
const params=useParams();
const getCuisine=async(name)=>{
const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&cuisine=${name}`);
const recipes=await data.json();
setCuisine(recipes.results);
}
useEffect(()=>{
getCuisine(params.type);
console.log(params.type);
}
,[params.type]);


  return (
    <div>Cuisine</div>
  )
}
const Grid=styled.div`
  display: grid;
  grid-template-columns: re;
`;
export default Cuisine