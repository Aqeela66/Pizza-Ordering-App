import './App.css';
import React from 'react';
//import Navbar from './component/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { Link } from 'react-router-dom';
// {BrowserRouter as Router, Link } from 'react-router-dom';
//import  logo  from './logo.png';
//import Button from "react-bootstrap/Button";
import Header from './component/Header'
import Secondpage from './component/Secondpage'
import Thirdpage  from './component/Thirdpage'
import Fourthpage  from './component/Fourthpage'
function App() {
  return(

    <div >
    <Header/>
    <Secondpage/>
    <Thirdpage/>
    <Fourthpage/>
    </div>

);
}

export default App;
