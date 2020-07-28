import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navigation.css";

function Navigation(){
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Marcel Thiemann</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/projects">Portfolio</Nav.Link>
                    <Nav.Link href="marcelthiemann.pdf" target="_blank">CV</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;