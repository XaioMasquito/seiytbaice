import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/A.css";
function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas className="wer" show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className="aq">
            <h2 className="qw_p">About Us</h2>
            <p className="qw_p1">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor <br /> incididunt ut labore et dolore magna
              aliqua. <br />
              Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco
              laboris nisi ut aliquip ex <br /> ea commodo consequat. <br />
              Duis aute irure dolor in reprehenderit in <br /> voluptate velit
              esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint
              occaecat <br /> cupidatat non proident, sunt in culpa qui <br />{" "}
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="aq1">
            <div className="a_imp">
            <input type="text" className="a_inp" /><button className="ok">ok</button></div>
            <a href="/" className="aq_pop">
              Home
            </a>
            <a href="http://localhost:3000/shop" className="aq_pop">
              Shop
            </a>
            <a href="http://localhost:3000/blog" className="aq_pop">
              Blog
            </a>
            <a href="/" className="aq_pop">
              Pages
            </a>
            <a href="http://localhost:3000/about" className="aq_pop">
              About Us
            </a>
            <a href="http://localhost:3000/contact" className="aq_pop">
              Contact Us
            </a>
          </div>
          <hr />
          <p className="as">
            LANGUAGE: <span>Englih</span>
          </p>
          <p className="as">
            CURRENCY: <span>USE</span>
          </p>
          <div className="werty"></div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasExample;
