import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
function Search() {
    const[input,setInput]=useState("");
    const navigate=useNavigate();
  const handler=(e)=>{
    e.preventDefault();
    navigate("/search/"+input);
  }
    return (
    <FormStyled onSubmit={handler}>
    <div>
    <FaSearch/>
    <input onChange={(e)=>{setInput(e.target.value)}} type="text" value={input} />
    </div>
        
    </FormStyled>
  )
}
const FormStyled=styled.form`
  margin  :0rem ;
 width: 60%;
 margin:2rem auto 0rem auto ;
  position: relative;
  
  div{
    position: relative;
    width: 100%;

  }
 
  input{
    border: none;
    background: linear-gradient(35deg,#494949,#313131);
    font-size: 1rem;
    color: white;
    padding: 0.5rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;

  }
  svg{
    position: absolute;
    left: 0%;
    top: 50%;
    transform: translate(100%,-50%);
  }
`;
export default Search