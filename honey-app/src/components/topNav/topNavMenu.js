import React from "react";
import { Link } from "react-router-dom";
import "./topNav.css";

function TopNavMenu() {
  return (
    <div className="TopNavMenu">
      <div className="menuHeader">YOUR ACCOUNT</div>
      <div className="menuItem">
        <Link to="/signin">Sign In</Link>
      </div>
      <div className="menuHeader">GENERAL</div>
      <div className="menuItem">
        <Link to="/about">About Honey Butter</Link>
      </div>
      <div className="menuItem">
        <Link to="/terms">Terms of Use</Link>
      </div>
      <div className="menuItem">
        <Link to="/contact">Contact Honey Butter</Link>
      </div>
    </div>
  );
}

export default TopNavMenu;
