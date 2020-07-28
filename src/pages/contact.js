import React from "react"
import Layout from "../components/Layout/Layout";
import ContactMe from "../components/Contact/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  return (
    <Layout title="Contact me" description="If you'd like to collaborate or have a question about one of my projects, please get in touch with me by using the form below.">
      <ContactMe />
    </Layout>
  );
}
