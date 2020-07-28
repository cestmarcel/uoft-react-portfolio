import React from "react";
import Alert from "react-bootstrap/Alert";
import "./Footer.css";

function Footer(){
    return (
        <Alert>
            <section className="alert alert-custom footer" role="alert">
                Built by Marcel Thiemann in Toronto &copy; 2020
            </section>
        </Alert>
    )
}

export default Footer;