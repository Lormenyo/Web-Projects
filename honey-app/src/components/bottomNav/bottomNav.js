import React from "react";
import { Row, Col } from "react-bootstrap";
import "./bottomNav.css"
import {CgSearch, CgHome} from "react-icons/cg";
import {BiShoppingBag} from "react-icons/bi"

function BottomNavBar() {
  return (
    <div className="BottomNavBar">
      <Row>
        <Col sm={4} className="MenuItem selected"> <CgHome size={18} color={"#452725"} className="me-2"/> Home</Col>
        <Col sm={4} className="MenuItem"><CgSearch size={18} color={"#452725"} className="me-2"/>  Search</Col>
        <Col sm={4} className="MenuItem"> <BiShoppingBag size={18} color={"#452725"}  className="me-2"/> Cart</Col>
      </Row>
    </div>
  );
}

export default BottomNavBar;
