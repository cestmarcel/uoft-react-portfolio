import React from "react";
import "./Intro.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Intro(){
    return (
        <div className="container">
            <div className="media">
                <img src="/img/marcel.jpg" className="mr-3" alt="Marcel" />
                <div className="media-body">
                    <h5 className="mt-0">About me</h5>
                    I'm a technology professional and developer with a master’s degree in Strategy & Planning. 
                    Currently pursuing a certificate from the University of Toronto in full stack web technologies.
                    <br/><br/>
                    Skills in JavaScript, CSS, HTML, Node.js, and SQL. Successfully launched a new B2B brand and 
                    enterprise software product in Silicon Valley. Attracted customers like Mercedes-Benz and BMW 
                    while leading a $2M seed funding round.
                    <br/><br/>
                    Passionate about approaching programming challenges from a business angle and leveraging 
                    cross-functional collaboration. Uniquely positioned to holistically deliver technical 
                    solutions while leveraging a product background.
                    <br/><br/>
                    <div className="buttons">
                        <a href="./portfolio" className="btn btn-primary mt-2 mr-2">View my portfolio</a>
                        <a href="./contact" className="btn btn-primary mt-2 mr-2">Contact</a>
                        <a href="marcelthiemann.pdf" className="btn btn-primary mt-2 mr-2">Download my CV</a>
                            <DropdownButton as={ButtonGroup} title="Let's connect online!" id="bg-nested-dropdown" className="mt-2">
                                <Dropdown.Item eventKey="1" href="http://linkedin.com/in/marcelthiemann" target="_blank">LinkedIn</Dropdown.Item>
                                <Dropdown.Item eventKey="2" href="http://github.com/cestmarcel" target="_blank">Github</Dropdown.Item>
                                <Dropdown.Item eventKey="3" href="http://twitter.com/cestmarcel" target="_blank">Twitter</Dropdown.Item>
                            </DropdownButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;