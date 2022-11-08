import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

const Recipe = () => {
const [details,setDetails] = useState({});
const params = useParams()
const [activeTab, setActiveTab] = useState('Instructions');
const getDescription = async()=>{
    const res = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_RECIPE_KEY}`)
    const description = await res.json();
    setDetails(description)
}

useEffect(()=>{
    getDescription()
},[params.name])


  return (
    <DetailWrapper>
<div>
    <h4>{details.title}</h4>
    <img src={details.image} alt={details.title} />
</div>
<Info>
    <Button className={activeTab === "Instructions" ? "active" : ""} onClick={()=>setActiveTab('Instructions')}>Instructions</Button>
    <Button className={activeTab === "Ingredients" ? "active" : ""} onClick={()=>setActiveTab('Ingredients')}>Ingredients</Button>
{activeTab === "Instructions" && (
    <div>
    <h3 dangerouslySetInnerHTML={{ __html:details.summary}}/>
    <h3 dangerouslySetInnerHTML={{ __html:details.instructions}}/>
</div>
)}
{activeTab === "Ingredients" && (
<ul>
    {details.extendedIngredients.map((ingredient)=>
    ( <li key={ingredient.id}>{ingredient.original}</li>))}
</ul>
)}
</Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
margin-top:10rem;
margin-bottom:5rem;
display:flex;
.active{
    background:linear-gradient(35deg, #494949, #313131);
    color:white;
}
h2{
    margin-bottom:2rem;
}
li{
    font-size:1.2rem;
    line-height:2.5rem;
}
ul{
    margin-top:2rem;

}
`
const Button = styled.button`
padding:1rem 2rem;
color:#313131;
background:white;
border:2px solid black;
margin-right:2rem;
font-weight:600;

`
const Info = styled.div`
margin-left:10rem;
`
export default Recipe