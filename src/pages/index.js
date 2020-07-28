import React from "react"
import Layout from "../components/Layout/Layout";
import Intro from "../components/Intro/Intro";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <Layout title="Hi, I'm Marcel" description="On this page you can learn more about me and explore my portfolio.">
      <Intro />
    </Layout>
  );
}
