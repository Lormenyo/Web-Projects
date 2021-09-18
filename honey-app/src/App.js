import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
// import {BiDownArrow} from "react-icons/bi"
import TopNavMenu from "../src/components/topNav/topNavMenu";
import React, { useState } from "react";

function App() {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  function toggleMenu() {
    setMenuVisibility(!isMenuVisible);
  }

  return (
    <div className="App">
      <div className="Navbar">
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">
              <div className="App-logo"></div>
            </Navbar.Brand>
            <div className="justify-content-end">
              <FiMenu size={28} onClick={toggleMenu} />
            </div>
          </Container>
        </Navbar>
        {/* <BiDownArrow size={28} color={"black"}/> */}
        {isMenuVisible ? <TopNavMenu /> : null}
      </div>

      <div className="Posts">
        <div className="bottomGradient"></div>
        <div className="postImage"></div>
      </div>
    </div>
  );
}

export default App;
