import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "../Layout/Dashboard/Dashboard";
import Sidebar from "../Layout/Sidebar/Sidebar";
import Workspace from "../Layout/Workspace/Workspace";
import Clients from "../Layout/Clients/Clients";

import "./App.css";
import "../Layout/Media-width.css";
import "../Layout/Media-height.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Workspace />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/clients" component={Clients} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
