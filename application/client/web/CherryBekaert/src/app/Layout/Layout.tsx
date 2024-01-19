import React, { Component, Suspense } from "react";
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
import "./Layout.css";
import { useHistory } from "react-router-dom";
import ScduleAppointment from "app/DataSource/ScduleAppointment/ScduleAppointment";
import DataSource from "app/DataSource/DataSource";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";

export class Layout extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      toggle: false,
      trigger: false,
      render: false,
    };
  }

  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  handleTrigger = () => {
    this.setState({
      render: !this.state.trigger,
    });
    // this.props.history.push("/");
  };

  render() {
    const sidebarWidth = !this.state.trigger ? "210px" : "60px";
    const ibmLogo: any = require("../../assets/img/ibmImg.png");
    const cherryLogo = require("../../assets/img/cherryImg.png");
    // const template = {
    //   name: "CHERRY BEKAERT-ADMIN",
    //   color: "#62B83D",
    //   logo: cherryLogo,
    // };
    const template = {
      name: "IBM-ADMIN",
      color: "#1f70c1",
      logo: ibmLogo,
    };

    return (
      <>
        <div style={{ display: "flex" }}>
          <div
            className="sider"
            style={{ backgroundColor: template.color, width: sidebarWidth }}
          >
            <Nav defaultActiveKey="/home" className="flex-column">
              {!this.state.trigger ? (
                <>
                  <div
                    style={{ padding: "14px", marginLeft: 20, marginTop: 10 }}
                  >
                    <img
                      src={template.logo}
                      width="120px"
                      height="80px"
                      alt="react-logo"
                    />
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
                  <div className="footer-open-content">
                    <>
                      <LuLogOut style={{ color: "white", fontSize: "1.5em" }} />
                      <span>Logout</span>
                    </>
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
            <TopBar
              name={template.name}
              btnColor={template.color}
              allProps={this.props}
            />

            <div className="" style={{ height: "90vh", overflowY: "scroll" }}>
              {/* <Content template={template} /> */}

              <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                  <Switch>
                    <Route
                      exact
                      path={"/"}
                      key={0}
                      render={(props: any) => <ScduleAppointment {...props} />}
                    />
                    <Route
                      exact
                      path={"/admin"}
                      key={0}
                      render={(props: any) => (
                        <DataSource {...props} theme={template} />
                      )}
                    />
                    {/* <Route
                      exact
                      path={"/login"}
                      key={1}
                      render={(props: any) => <Login {...props} />}
                    />
                    <Route
                      exact
                      path={"/signup"}
                      key={2}
                      render={(props: any) => <Signup {...props} />}
                    /> */}
                  </Switch>
                </Suspense>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Layout;
