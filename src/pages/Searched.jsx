import { useState,useEffect } from "react"
import{useParams,Link}from 'react-router-dom';
import styled from 'styled-components';

const Searched = () => {
    const [cuisine ,setCuisine] = useState([])
    let params = useParams()

    const getSearched = async (name)=>{
        const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_KEY}&query=${name}`)
        const data = await res.json()
        
        const recipes = data.results;
        setCuisine(recipes)
          }
    
  useEffect(()=>{
    getSearched(params.search)
   //console.log(cuisine)
  },[params.search])
  return (
    
    <Grid>
     {cuisine.map((recipe)=>{
       return (
         <Card key={recipe.id}>
            <Link  to={"/recipe/" + recipe.id}>
          <img src={recipe.image} alt={recipe.title} />
          <h4>{recipe.title}</h4></Link>
         </Card>
       )
     })}
   </Grid> 
 )
}
const Grid = styled.div`
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


export default Searched