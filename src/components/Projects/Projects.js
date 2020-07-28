import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Projects from "../../../src/projects.json";

function createRows(cards){
    const projectRows = [];
    for (let i=0; i <= (cards.length / 3); i++) {
    const startingIndex = i * 3;
    projectRows[i] = [cards[startingIndex], cards[startingIndex + 1], cards[startingIndex + 2]];
    }
    return projectRows;
}

const AllProjects = () => {
    let projects = Projects;
    const cards = 
        projects.map(project => {
            return (
                <Col className="col-sm-4" key={project.title}>
                    <Card className="mb-2" style={{ width: '100%' }}>
                        <Card.Img variant="top" src={project.image} />
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>
                            {project.description}
                            </Card.Text>
                            <a href={project.github} target="_blank" className="btn btn-primary mt-2">View Github</a>
                        </Card.Body>
                    </Card>
                </Col>
            )
        });
    const rows = createRows(cards);
    return (
            rows.map((row, index) => {
                return (
                    <Row key={index}>
                        {row}
                    </Row>
                )
            })
        )
}

export default AllProjects;