import React from "react";
import Login from "./components/pages/Login";
import Forgot from "./components/pages/Forgot";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/forgot">
          <Forgot />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
