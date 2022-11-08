import styled from "styled-components"
import { useState } from "react"
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

const Search = () => {
const [search,setSearch]=useState("")
const navigate = useNavigate();

const submitHandler = (e)=>{
e.preventDefault()

navigate('/search/'+search)
}
  return (
    <Sform onSubmit={submitHandler}>
<div>
<input type="text" onChange={(e)=>setSearch(e.target.value)} value={search}/>

<FaSearch></FaSearch>
</div>
    </Sform>
  )
}

const Sform = styled.form`
margin : 0rem 20rem;


div{
    position : relative;
    width:100%;  
}
input{
    border:none;
    background:linear-gradient(35deg , #494949, #313131);
    font-size:1.5rem;
    color:white;
    padding:1rem 3rem;
    border-radius:2rem;
    outline:none;
    width:100%;
}

svg{
    color:white;
    font-size:1.5rem;
    position:absolute;
    top:50%;
    left:0%;
    transform:translate(100%,-50%);

}
`
export default Search