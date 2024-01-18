import React, { Component } from "react";
// import logo from "../../assets/img/ibmLogo.png";
import { Nav, NavDropdown } from "react-bootstrap";
import { FaUser, FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

import {
  IoMdSettings,
  IoIosChatbubbles,
  IoMdArrowDropup,
  IoMdArrowDropdown,
} from "react-icons/io";
import TopBar from "../TopBar/TopBar";
import Content from "../Content/Content";

// import Topbar from "../topbar/Topbar";
import "./Layout.css";

export class Layout extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      toggle: false,
      trigger: false,
    };
  }

  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  handleTrigger = () => {
    this.setState({
      trigger: !this.state.trigger,
    });
  };

  render() {
    const sidebarWidth = !this.state.trigger ? "210px" : "60px";
    const ibmLogo: any = require("../../assets/img/ibmImg.png");
    return (
      <>
        <div style={{ display: "flex" }}>
          <div className="sider" style={{ width: sidebarWidth }}>
            <Nav defaultActiveKey="/home" className="flex-column">
              {!this.state.trigger ? (
                <>
                  <div
                    style={{ padding: "14px", marginLeft: 20, marginTop: 10 }}
                  >
                    <img src={ibmLogo} width="100px" alt="react-logo" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px",
                      // marginLeft: "5%",
                    }}
                  >
                    <FaUser style={{ color: "white" }} />
                    <Nav.Link className="nav-link">Admin</Nav.Link>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px",
                      // marginLeft: "5%",
                    }}
                    className="sidebar-nav"
                  >
                    <IoIosChatbubbles style={{ color: "white" }} />
                    <Nav.Link>Chat</Nav.Link>
                  </div>
                  {/* <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                    onClick={this.handleToggle}
                  >
                    <NavDropdown
                      title={
                        <span>
                          Tickets
                          {this.state.toggle ? (
                            <IoMdArrowDropdown style={{ marginLeft: "5px" }} />
                          ) : (
                            <IoMdArrowDropup style={{ marginLeft: "5px" }} />
                          )}
                        </span>
                      }
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item href="addticket">
                        Add Ticket
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div> */}
                  <div
                    className="footer-open-content"
                    // onClick={this.handleTrigger}
                  >
                    {/* {!this.state.trigger ? ( */}
                    <>
                      <LuLogOut style={{ color: "white", fontSize: "1.5em" }} />
                      <span>Logout</span>
                    </>
                    {/* ) : null} */}
                  </div>
                </>
              ) : (
                <>
                  {/* <div style={{ position: "relative", top: "40px" }}>
                    <img src={logo} width="60px" alt="react-logo" />
                  </div>
                  <div
                    className="footer-close-content"
                    onClick={this.handleTrigger}
                  >
                    <FaAngleDoubleRight style={{ fontSize: "1.5em" }} />
                  </div> */}
                </>
              )}
            </Nav>
          </div>
          <div style={{ width: "100%" }}>
            <TopBar name="IBM-ADMIN" />
            <Content />
          </div>
        </div>
      </>
    );
  }
}

export default Layout;
