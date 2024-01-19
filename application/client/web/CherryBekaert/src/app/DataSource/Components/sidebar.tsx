import DataSource from "app/DataSource/DataSource";
import ScduleAppointment from "app/DataSource/ScduleAppointment/ScduleAppointment";
import Login from "app/login/login";
import Signup from "app/signup/signup";
import TopBar from "app/TopBar/TopBar";
import React, { Suspense, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import Layout from "../../Layout/Layout";
import "../../Layout/Layout.css";

const SideBar = ({ template }: any) => {
  const history = useHistory();
  console.log(history, "history777");
  const location = useLocation();

  useEffect(() => {
    // Logic to handle route changes and trigger re-render if needed
    console.log("Location changed:App", location.pathname);
  }, [location]);

  const ibmLogo: any = require("../../../assets/img/ibmImg.png");
  const cherryLogo = require("../../../assets/img/cherryImg.png");

  // const template = {
  //   name: "IBM-ADMIN",
  //   color: "#1f70c1",
  //   logo: ibmLogo,
  // };

  // const template = {
  //   name: "CHERRY BEKAERT-ADMIN",
  //   color: "#62B83D",
  //   logo: cherryLogo,
  // };

  return (
    <>
      <div
        className="sider"
        style={{
          backgroundColor: template?.color,
          width: 210,
          minHeight: "100vh",
        }}
      >
        <Nav defaultActiveKey="/home" className="flex-column">
          <>
            <div style={{ padding: "14px", marginLeft: 20, marginTop: 10 }}>
              <img
                src={template?.logo}
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
              className="nav-container"
            >
              <FaUser style={{ color: "white" }} />
              <Nav.Link
                className="nav-link"
                onClick={() => history.push("/admin")}
              >
                Admin
              </Nav.Link>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                // marginLeft: "5%",
              }}
              className="sidebar-nav nav-container"
            >
              <IoIosChatbubbles style={{ color: "white" }} />
              <Nav.Link>Chat</Nav.Link>
            </div>
            <div
              className="footer-open-content"
              onClick={() => history.push("/")}
            >
              <>
                <LuLogOut style={{ color: "white", fontSize: "1.5em" }} />
                <span>Logout</span>
              </>
            </div>
          </>
        </Nav>
      </div>
    </>
  );
};
export default SideBar;
