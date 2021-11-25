
import { useState } from 'react';
import { Route } from 'react-router';

import './App.css';
import Details from './Component/Details';
import Home from './Component/Home';
import List from './Component/List';
import Navbarr from './Component/Navbar';

function App() {

const [users,setUsers]=useState([
  {id:0, name:'ali', age:24, adress:"boumhal", img:"https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1"}, 
  {id:1, name:'salah', age:24, adress:"metlaoui", img:"https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1"},
  {id:2, name:'ahmed', age:25, adress:"sfax", img:'https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1' }])

  return (
    <div className="App">
     
<Navbarr></Navbarr>
<Route  path='/'  >    <Home/>     </Route>
<Route  exact path='/'    component={Home}     />
<Route   path='/users'      render={()=>  <List  users={users}  ></List>  }      />
<Route   path='/details/:'   render={(props)=><Details  users={users}  {...props}   />}    />


    </div>
  );
}

export default App;
