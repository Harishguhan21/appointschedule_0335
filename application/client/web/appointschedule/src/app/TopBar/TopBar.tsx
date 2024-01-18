import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { FaUserCircle } from "react-icons/fa";

import "./TopBar.css";

export class TopBar extends React.Component<any, any>  {
  render() {
    return (
      <>
        <div style={{ width: "100%", padding: "10px", color: "#FF5D00" }}>
          <Navbar variant="light">
            <Navbar.Brand>{this.props.name}</Navbar.Brand>
            <FaUserCircle style={{ fontSize: "2em", cursor: "pointer" }} />
          </Navbar>
        </div>
      </>
    );
  }
}

export default TopBar;