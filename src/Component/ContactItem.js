import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <>
    <Row>
        <Col lg={1}>
            <img width = "50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7QW7-0YLMeoqv448qZ3T33JFoHCkLjjwhQ&s"></img>
        </Col>
        <Col lg={11}>
            <div>{item.name}</div>
            <div>{item.phoneNumber}</div>

        </Col>
    </Row>
    </>
  )
}

export default ContactItem
