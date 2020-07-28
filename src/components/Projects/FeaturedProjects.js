import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Projects from "../../../src/featuredProjects.json";

const FeaturedProjects = () => {
    let projects = Projects;
    return (
        <Row>
            {projects.map(project => {
                return (
                    <Col className="col-sm-6" key={project.title}>
                        <Card className="mb-2" style={{ width: '100%' }}>
                            <Card.Img variant="top" src={project.image} />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>
                                {project.description}
                                </Card.Text>
                                <a href={project.github} target="_blank" className="btn btn-primary mt-2 mr-2">View Github</a>
                                <a href={project.project} target="_blank" className="btn btn-primary mt-2">View Project</a>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}

export default FeaturedProjects;