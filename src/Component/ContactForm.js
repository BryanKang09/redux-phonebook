import React from 'react'
import { Form,Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
    const [name,setName] = useState('');
    const dispatch = useDispatch();
    const [phoneNumber,setPhoneNumber] = useState('');
    const addContact =(e)=>{
        e.preventDefault();
        dispatch({type:"ADD_CONTACT",payload:{name,phoneNumber}})
    }
    
    

  return (
    <>
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="forName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>Contact</Form.Label>
        <Form.Control type="number" placeholder="Enter Contct Number" onChange={(e)=>setPhoneNumber(e.target.value)}/>
      </Form.Group>
      
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}


export default ContactForm
