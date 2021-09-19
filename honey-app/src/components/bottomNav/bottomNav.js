import React from "react";
import { Row, Col } from "react-bootstrap";
import "./bottomNav.css"
import {FaSearch, FaHome, FaShoppingBag} from "react-icons/fa";

function BottomNavBar() {
  return (
    <div className="BottomNavBar">
      <Row>
        <Col sm={4} className="MenuItem selected"> <FaHome size={18} color={"#452725"} className="me-2"/> Home</Col>
        <Col sm={4} className="MenuItem"><FaSearch size={18} color={"#452725"} className="me-2"/>  Search</Col>
        <Col sm={4} className="MenuItem"> <FaShoppingBag size={18} color={"#452725"}  className="me-2"/> Cart</Col>
      </Row>
    </div>
  );
}

export default BottomNavBar;
