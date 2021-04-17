import React from "react";

import { AnimatePresence } from "framer-motion";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Details, Home } from "./pages";

export default function MainApp() {
  return (
    <Router>
        <AnimatePresence exitBeforeEnter initial={true}>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
      </Switch>
      </AnimatePresence>
    </Router>
  );
}
