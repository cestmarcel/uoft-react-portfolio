import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactMe(){
    return (
        <Form className="container">
            <Form.Group controlId="formBasicName">
                <Form.Label>Your name</Form.Label>
                <Form.Control type="email" placeholder="Enter name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your message</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default ContactMe;