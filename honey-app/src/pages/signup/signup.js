import { Navbar, Container } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import { RiArrowLeftSLine } from "react-icons/ri";
import TopNavMenu from "../../components/topNav/topNavMenu";
import BottomNavBar from "../../components/bottomNav/bottomNav";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

function SignUp() {
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
              <h6>Join the Community</h6>
            </div>
            <div className="subtitle">Sign up to start the experience</div>

            <div className="mt-4">
              <FacebookLogin
                textButton="Sign up with Facebook"
                appId="1088597931155576"
                autoLoad
                callback={toggleMenu}
                cssClass="btn btn-primary facebook mt-3"
                icon={<span className="social-media-facebook"></span>}
              />
              <GoogleLogin
                  render={renderProps => (
                    <button className="btn btn-primary mt-3"
                    onClick={renderProps.onClick}>
                    <span className="social-media-google"></span>
                    Sign up with Google
                  </button>
                  )}
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Sign Up with Google"
                onSuccess={toggleMenu}
                onFailure={toggleMenu}
                cookiePolicy={"single_host_origin"}
              />
              
            </div>

            <div className="mt-5 subtitle">
              Already a Honey Butter member?{" "}
              <span className="signin-text">
                <Link to="/signin">Sign In</Link>
              </span>
            </div>
          </Container>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
}

export default SignUp;
