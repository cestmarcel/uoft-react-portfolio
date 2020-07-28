import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Header.css";

function Header({title, description}){
    return (
        <Jumbotron className="jumbotron-fluid">
            <section className="container">
            <h1 className="display-4">{title}</h1>
            <p className="lead">{description}</p>
            </section>
        </Jumbotron>
    )
}

export default Header;