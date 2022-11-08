
import styled from "styled-components";
import {Splide , SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

const Veggie = () => {
  const [veggie,setVeggie] = useState([]);
  const getVeggie = async ()=>{

    const check = localStorage.getItem('veggie')  
    if(check){
      setVeggie(JSON.parse(check))
    }else{
    const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_KEY}&number=9&tag=vegitarian`)
    const data = await res.json();
    localStorage.setItem('veggie',JSON.stringify(data.recipes))
    setVeggie(data.recipes)
    //console.log(process.env.REACT_APP_RECIPE_KEY)
        }}
    useEffect(()=>{
        getVeggie()
    },[])
  return (
    <div>

      
    <Wrapper>
      <p>Veggie Picks</p>
      <Splide options={{
        perPage:3,
        gap: '5rem',
        drag:'free',
        arrows:false,
        pagination:false,
        width:1500,
        height:300
    
      }}>
        {veggie.map((recipe) => {
            return (
          <SplideSlide key={recipe.id}>
          <Card>
            <Link  to={"/recipe/" + recipe.id}>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} />
            <Gradient></Gradient>
          </Link>
          </Card>
    </SplideSlide>
        );
          })}
          </Splide>
    </Wrapper>
          
      
        </div>

  )
}
const Wrapper = styled.div`
margin:4rem 0rem;

`;

const Card = styled.div`
min-height:25rem;
border-radius:2rem;
overflow:hidden;
position:relative
img{
border-radius:2rem;
position:absolute;
left:0;
width:100%;
height:100%;
object-fit:cover
}
p{
 color:white;
 font-weight:600;
 font-size:1rem;
 position:absolute;
 z-index:10;
 left:30%;
 bottom:0%;
 transfrom:translate(-50%,0%)
 width:100%;
 text-align:center;
 height:40%;
 display:flex;
 justify-content:center;
 align-items:center
}
`;

const Gradient = styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`

export default Veggie