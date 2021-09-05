import React from 'react';
import Button from "react-bootstrap/Button";
const Secondpage =() =>{
  return (
    <div className='secondpage'>
    <div className='container-1'>
    <hr/>
    <br/>
    <h1> Pizza Ordering Application </h1>
    </div>

    <div className='orderbutton'>
    <Button variant="danger" size="lg" >
      View all Orders
    </Button>
    <Button variant="danger" size="lg" >
      Place an Order
    </Button>
    <Button variant="danger" size="lg" >
      Cancel an Order
    </Button>
    </div>
    </div>
  )
}
export default Secondpage;
