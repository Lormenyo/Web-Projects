import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import { VscMute } from "react-icons/vsc";
import { Row, Col } from "react-bootstrap";
import "./postDetails.css";

function PostDetails(props) {
  //props: title, description, icon
  return (
    <div>
      <Row>
        <Col sm={2} className="postIcon">
          {" "}
          <div className="circle">
            <AiOutlineShop color={"#786E6C"} size={22} />
          </div>
        </Col>
        <Col sm={8} className="postTitle">
          <Row className="post-title">{props.name}</Row>
          <Row className="description">{props.description}</Row>
        </Col>
        <Col sm={2} className="postMute">
        <div className="circle">
          <VscMute size={20} color={"#786E6C"} />
        </div>
        </Col>
      </Row>
    </div>
  );
}

export default PostDetails;
