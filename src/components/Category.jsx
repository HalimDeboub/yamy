import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles,GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
 
 const Category = () => {
   return (
     <List>
        <Slink to={'/cuisine/italian'}>
            <FaPizzaSlice></FaPizzaSlice>
            <h4>Italian</h4>
        </Slink>
        <Slink to={'/cuisine/american'}>
            <FaHamburger></FaHamburger>
            <h4>American</h4>
        </Slink>
        <Slink to={'/cuisine/tai'}>
            <GiNoodles></GiNoodles>
            <h4>Tai</h4>
        </Slink>
        <Slink to={'/cuisine/japanese'}>
            <GiChopsticks></GiChopsticks>
            <h4>Japanese</h4>
        </Slink>
     </List>
   )
 }
 

 const List = styled.div`
 display:flex;
 justify-content:center;
 margin:2rem 0rem;
 align-items:center;
 
 `
 const Slink = styled(NavLink)`
 display : flex;
 flex-direction : column;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:2rem;
text-decoration:none;
background:linear-gradient(35deg, #494949, #313131);
width:6rem;
height:6rem;
cursor:pointer;
transfrom:scale(0.9);

h4{
  color:white;
  font-size:0.9rem;
}
svg{
color:white;
font-size:1.5rem;
}
&.active{
  background:linear-gradient(to right, #f27121, #e94057);
}

 `
 export default Category