import React from 'react'
import {useEffect,useState} from 'react'
import {Splide,SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

function Veggie() {
const[veggies,setVeggies]=useState([]);
   
useEffect(()=>{
        getVeggies();

    },[]);
  


    const getVeggies= async ()=>{
      const check=localStorage.getItem("veggies");
      if(check)
      {
        setVeggies(JSON.parse(check));
      }
       else{
        const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=9&tags=vegetarian`);
        const data= await api.json();
        localStorage.setItem("veggies",JSON.stringify(data.recipes));
        console.log(data.recipes);
        setVeggies(data.recipes);
       }
    }
    
    return (
    <div>
    <Wrapper>
    <h3>Vegetarian Picks</h3>
    <Splide options={{
      perPage:3,
      arrows:false,
      pagination:false,
      gap:"1rem",
      
    }}>
    {veggies.map((recipe)=>{

      return(
      <SplideSlide key={recipe.id}>
    <Card key={recipe.id}>
    <Link to={'/recipe/'+recipe.id}>
    <img src={recipe.image} alt={recipe.title}></img>
    <p>{recipe.title}</p>
    </Link>
    </Card>
    </SplideSlide>
    );
    })}

    </Splide>
  
    </Wrapper>
    </div>
    );
}

const Wrapper=styled.div`

`;
const Card=styled.div`
margin: 5px 15px;
position: relative;
min-height: 12rem;
overflow: hidden;
img{
  position: absolute;
  object-fit: cover;
height:100%;
width:100%;
border-radius: 10%;

}

p{
position: absolute;
z-index: 10;
width: 100%;
left: 50%;
bottom:5%;
text-align: center;
display:flex;
justify-content: center;
color: white;
transform: translate(-50%,0%);
font-weight: 600;
font-size: 1rem;
}

`;



export default Veggie

