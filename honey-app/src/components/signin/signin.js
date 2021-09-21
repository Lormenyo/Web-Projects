import { Navbar, Container } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import { RiArrowLeftSLine } from "react-icons/ri";
import TopNavMenu from "../topNav/topNavMenu";
import BottomNavBar from "../bottomNav/bottomNav";
import React, { useState } from "react";
import "./signin.css";
import { Link } from "react-router-dom";

function SignIn() {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  function toggleMenu() {
    setMenuVisibility(!isMenuVisible);
  }
  return (
    <div className="App">
      <div className="SignIn">
        <div className="Navbar Navbar-shadow">
          <Navbar>
            <Container>
              <RiArrowLeftSLine size={28} />
              <Navbar.Brand href="/">
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
        <div className="content">
          <Container>
            <div className="title">
              <h6>Welcome to Honey Butter</h6>
            </div>
            <div className="subtitle">
              Sign in to continue with your experience
            </div>

            <div className="mt-4">
              <button className="btn btn-primary facebook mt-3">
                <span className="social-media-facebook"></span>
                Continue with Facebook
              </button>

              <button className="btn btn-primary mt-3">
                <span className="social-media-google"></span>
                Continue with Google
              </button>
            </div>

            <div className="mt-5 subtitle">
              New to Honey Butter? <span className="signup-text">
                <Link to="/signup">Sign Up</Link>
              </span>
            </div>
          </Container>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
}

export default SignIn;
