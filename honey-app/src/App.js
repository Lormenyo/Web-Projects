import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
// import {BiDownArrow} from "react-icons/bi"
import TopNavMenu from "../src/components/topNav/topNavMenu";
import React, { useState } from "react";
import BottomNavBar from "./components/bottomNav/bottomNav";
import PostDetails from "./components/postDetails/postDetails";
import SideBar from "./components/sideBar/sideBar";

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
        <div className="Post">
          <div className="postImage"></div>
          <SideBar />
          <div className="postDetails">
          <PostDetails name="Shop Name" description="The description of the post!"/>
          </div>
        </div>
        <div className="Post">
          <div className="postImage"></div>
          <SideBar />
          <div className="postDetails">
          <PostDetails name="Shop Name" description="The description of the post!"/>
          </div>
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
}

export default App;
