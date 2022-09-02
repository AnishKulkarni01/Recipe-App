import React from 'react'
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components';
function Recipe() {
const[details,setDetails]=useState([]);
let params=useParams();
const[activeTab,setActiveTab]=useState('instructions');
const getDetails=async ()=>
{
    const data=await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_KEY}`);
const recipes=await data.json();
setDetails(recipes);
}
useEffect(()=>{
    getDetails();
},[params.name]);
  return (
    <DWrapper>
    <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
     
    </div>
    <Info>
         <Button className={activeTab==='instructions'?'active':''} onClick={()=>{setActiveTab('instructions')}}>Instructions</Button>
        <Button className={activeTab==='ingredients'?'active':''} onClick={()=>{setActiveTab('ingredients')}}>Ingredients</Button> 
        {activeTab==="instructions" && (
            <div>
            <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>

        </div>
        )}
       {activeTab==="ingredients" && (
        <ul>
        {details.extendedIngredients.map((ingredient)=>{
            <li key={ingredient.id}>{ingredient.original}</li>
        })}
        </ul>
       )}
       
    </Info>

    
    </DWrapper>
  )
}
const DWrapper=styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: linear-gradient(35deg,#494949,#313131);
        color: white;
    }
h2{
    margin-bottom: 2rem;
}

li{
    font-size: 1.2rem;
    line-height: 2.5rem;
}
ul{
    margin-top: 2rem;
}
img{
    transform: scale(0.8);
    margin-left: -5rem;
}

`;

const Button=styled.button`
padding: 1rem 2rem;
color: #313131;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
`;
const Info=styled.div`
margin-left: 10rem;


`;


export default Recipe