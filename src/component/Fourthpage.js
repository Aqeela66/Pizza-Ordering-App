import React from 'react';
import Button from "react-bootstrap/Button";
import { Form, FormGroup, FormControl, ControlLabel, FormLabel, FormText } from "react-bootstrap";
const Fourthpage =() =>{
  return (
    <div className='fourthpage'>
    <div className='container-3'>
    <br/>
   <hr/>
   <h1> Enter the details of your order. </h1>
    <br/>
    <Form className='form'>
  <Form.Group className="   m-4" controlId="formBasicEmail">
    <Form.Label>Crust</Form.Label>
    <Form.Control type="text" placeholder="Enter Crust" />
  </Form.Group>

  <Form.Group className=" m-4" controlId="formBasicPassword">
    <Form.Label>Flavour</Form.Label>
    <Form.Control type="text" placeholder="Enter your Flavour" />
  </Form.Group>

  <Form.Group className=" m-4" controlId="formBasicPassword">
    <Form.Label>Size</Form.Label>
    <Form.Control type="text" placeholder="Enter Size" />
  </Form.Group>

  <Button  className="center" variant="danger" type="submit">
    Place Order
  </Button>
</Form>
    </div>
    </div>

  )
}
export default Fourthpage;
