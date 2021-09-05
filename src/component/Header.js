import React from 'react';
import Navbar  from './Navbar';
//import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Link,Route, Switch} from "react-router-dom";
import Secondpage from './Secondpage';
 const Header =() =>{
   return (
     <div className="banner">
     <Navbar/>

     <div className="banner-content">
     <div className="container">
     <div className="banner-text">
       <h1> Read to order your favourite pizza !!</h1>
      <div className='btn btn-smart'>
      <Router>

     <Button    variant="danger" size="lg" as={Link} to='/Secondpage' >
       start here
     </Button>
     <Switch>
            <Route path="/secondpage">
          <Secondpage/>
            </Route>
             </Switch>
     </Router>
     </div>
     </div>

     </div>
     </div>
     </div>

   )
 }
 export default Header;
