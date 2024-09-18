import React from 'react'
import { Button } from 'react-bootstrap'
import { Form,Row,Col } from 'react-bootstrap';

const SearchBox = () => {
  return (
    <div>
        <Row>
            <Col lg={10}>
                <Form.Control type="text" placeholder="Enter name" />
            </Col>
            <Col lg={2}>
                <Button>Search</Button>
            </Col >
        </Row>
      
    </div>
  )
}

export default SearchBox
