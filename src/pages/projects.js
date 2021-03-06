import React from "react"
import Layout from "../components/Layout/Layout";
import AllProjects from "../components/Projects/Projects";
import FeaturedProjects from "../components/Projects/FeaturedProjects";
import 'bootstrap/dist/css/bootstrap.min.css';
import Spacer from "../components/Spacer/Spacer";

export default function Projects() {
  return (
    <Layout title="My portfolio" description="Here is a collection of a my digital projects. Feel free to check them out! By clicking on the image you will be directed to the respective website.">
        <div className="container">
            <h2>Featured projects</h2>
            <Spacer />
            <FeaturedProjects />
            <h3>All projects</h3>
            <AllProjects />
        </div>
    </Layout>
  );
}