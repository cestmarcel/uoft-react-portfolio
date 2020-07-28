import React from "react"
import Layout from "../components/Layout/Layout";
import Intro from "../components/Intro/Intro";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <Layout title="Error: 404" description="Page not found">
      <h1 className="container">Sorry, but the page you requested could not be found.</h1>
    </Layout>
  );
}
