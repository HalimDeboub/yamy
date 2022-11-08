import {Link,useParams} from 'react-router-dom'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';

const Cuisine = () => {

const [cuisine ,setCuisine] = useState([])
let params = useParams()
  const getCuisine = async (name)=>{
const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_KEY}&cuisine=${name}`)
const data = await res.json()

const recipes = data.results;
setCuisine(recipes)
  }
  useEffect(()=>{
    getCuisine(params.country)
   //console.log(cuisine)
  },[params.country])
  return (
    
     <Grid 
     animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}>
      {cuisine.map((recipe)=>{
        return (
          <Card key={recipe.id}>
           <img src={recipe.image} alt={recipe.title} />
           <h4>{recipe.title}</h4>
          </Card>
        )
      })}
    </Grid> 
  )
}
const Grid = styled(motion.div)`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(20rem , 1fr));
grid-gap:3rem;
`
const Card = styled.div`
img{
  width:100%;
  border-radius:2rem;
}
a{
  text-decoration:none
}
h4{
  text-align:center;
  padding:1rem;

}
`;
export default Cuisine