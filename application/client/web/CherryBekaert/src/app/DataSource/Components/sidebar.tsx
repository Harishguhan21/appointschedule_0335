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

  const pathName = window.location.pathname;

  console.log(pathName, "pathName");
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
                background: pathName === "/admin" ? template?.lightbgColor : "",
              }}
              className="nav-container"
              onClick={() => history.push("/admin")}
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
                background: pathName === "/chat" ? template?.lightbgColor : "",
              }}
              className="sidebar-nav nav-container"
              onClick={() => history.push("/chat")}
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
