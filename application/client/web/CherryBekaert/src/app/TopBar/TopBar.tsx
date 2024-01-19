import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { FaUserCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import "./TopBar.css";

function TopBar(props: any) {
  const location = window.location.pathname;

  const history = useHistory();

  console.log(history, "history");

  console.log(props, "propfunc");

  return (
    <div
      style={{
        width: "100%",
        padding: "10px",
        color: "#FF5D00",
        // position: "sticky",
        // top: 0,
        // zIndex: 5,
      }}
    >
      <Navbar variant="light">
        <Navbar.Brand>{props.name}</Navbar.Brand>
        <div className="profile-container">
          <FaUserCircle style={{ fontSize: "2em", cursor: "pointer" }} />
          {location === "/" ? (
            <button
              className="create-btn"
              style={{ backgroundColor: props.btnColor }}
              onClick={() => history.push("/admin")}
            >
              Create Type
            </button>
          ) : null}
        </div>
      </Navbar>
    </div>
  );
}

export default TopBar;
