import Home from './Home'
import {Route,Routes, useLocation }from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched';
import Recipe from './Recipe';
import {AnimatePresence} from 'framer-motion'
const Pages = () => {
  const location = useLocation();
  return (
    <div>
<AnimatePresence exitBeforeEnter>
<Routes location={location} key={location.pathname}>
<Route path='/' element={ <Home/>} />
<Route path='/cuisine/:country' element={ <Cuisine/>} />
<Route path="/search/:search" element={<Searched/>} />
<Route path="/recipe/:name" element={<Recipe/>} />
</Routes>
 </AnimatePresence>

    </div>
  )
}

export default Pages