import React from "react"
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Spacer from "../Spacer/Spacer";
import Footer from "../Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Layout.css";

function Layout({children, title, description}) {
  return (
    <div>
        <Navigation />
        <Header title={title} description={description}/>
            {children}
        <Spacer />
        <Footer />
    </div>
  );
}

export default Layout;