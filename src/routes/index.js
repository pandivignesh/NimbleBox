import React, { Suspense } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

//components
import Loader from "../components/Loader";

import routes from "./route.config";

const authed = () => {
  const value = document.cookie
    .split(";")
    .some((data) => data.includes("userToken"));
  return value;
};

const NimbleBoxRoutes = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            render={(props) => {
              if (route.authentication) {
                if (authed()) {
                  return <route.component {...props} routes={route.routes} />;
                }
                if (!authed()) return <Redirect to="/login" />;
              } else if (route.default) {
                if (authed()) return <Redirect to="/dashboard" />;
                if (!authed()) return <Redirect to="/login" />;
              } else {
                return <route.component {...props} routes={route.routes} />;
              }
            }}
          />
        ))}
      </Switch>
    </Suspense>
  </Router>
);

export default NimbleBoxRoutes;
