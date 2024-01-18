// import Login from "app/login/login";
import Signup from "../../app/signup/signup";
import Login from "../../app/login/login";
import Template from "../../app/template/template";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes, { userRoutes } from "../../routes";
import DataSource from "../../app/DataSource/DataSource";

const Context = (props: any) => {
  const [currentRoutes, setCurrentRoutes] = useState([]);
  const [theme, setTheme] = useState(props.template);

  useEffect(() => {
    let currentScreens: any = [];
    if (userRoutes) {
      userRoutes.forEach((e1: any) =>
        routes.forEach((e2: any) => {
          if (e1.screenname === e2.path.substring(1)) {
            currentScreens.push(e2);
          }
        })
      );
    }

    setCurrentRoutes(currentScreens);
  }, [userRoutes]);

  const getRoutes = (routes: any[]) => {
    return routes.map((prop, key) => {
      console.log("I am from routes----------->>>>", prop);
      let Component = prop.component;
      return (
        <Route
          exact
          path={prop.path}
          key={key}
          render={(props: any) => <Component {...prop} {...props} />}
        />
      );
    });
  };
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route
            exact
            path={"/admin"}
            key={0}
            render={(props: any) => <DataSource {...props} theme={theme} />}
          />
          {/* <Route
            exact
            path={"/"}
            key={0}
            render={(props: any) => <DataSource {...props} />}
          /> */}
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
          {getRoutes(currentRoutes)}
          {/* </ProtectedRoute> */}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
export default Context;
