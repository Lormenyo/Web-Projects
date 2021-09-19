import React from "react";
import { IoBagAddOutline } from "react-icons/io5";
import { BsHeart } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import "./sideBar.css"

function SideBar() {
  return (
    <div className="SideBar">
      <div className="side-circle mb-2">
        <BiNews size={20} color={"#786E6C"} />
      </div>
      <div className="side-circle mb-2">
        <BsHeart size={20} color={"#786E6C"} />
      </div>
      <div className="side-circle mb-2">
        <IoBagAddOutline size={20} color={"#786E6C"} />
      </div>
    </div>
  );
}

export default SideBar;
