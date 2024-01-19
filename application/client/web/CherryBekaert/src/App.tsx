import SideBar from "app/DataSource/Components/sidebar";
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
import Layout from "./app/Layout/Layout";
import "./app/Layout/Layout.css";
const App = () => {
  const history = useHistory();
  console.log(history, "history777");
  const location = useLocation();

  useEffect(() => {
    // Logic to handle route changes and trigger re-render if needed
    console.log("Location changed:App", location.pathname);
  }, [location]);

  const ibmLogo: any = require("./assets/img/ibmImg.png");
  const cherryLogo = require("./assets/img/cherryImg.png");

  // const template = {
  //   name: "IBM-ADMIN",
  //   color: "#1f70c1",
  //   logo: ibmLogo,
  // };

  const template = {
    name: "CHERRY BEKAERT-ADMIN",
    color: "#62B83D",
    logo: cherryLogo,
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ width: "100%" }}>
          <div className="" style={{ height: "100vh" }}>
            <BrowserRouter>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route
                    exact
                    path={"/"}
                    key={0}
                    render={(props: any) => (
                      <ScduleAppointment {...props} theme={template} />
                    )}
                  />
                  <Route
                    exact
                    path={"/admin"}
                    key={0}
                    render={(props: any) => (
                      <DataSource {...props} theme={template} />
                    )}
                  />
                  <Route
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
                  />

                  {/* <ProtectedRoute> */}
                  {/* {getRoutes(currentRoutes)} */}
                  {/* </ProtectedRoute> */}
                </Switch>
              </Suspense>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
