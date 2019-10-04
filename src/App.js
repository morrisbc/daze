import React from "react";
import Login from "./components/pages/Login";
import Forgot from "./components/pages/Forgot";
import Signup from "./components/pages/Signup";
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
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/dashboard"></Route>
      </Switch>
    </Router>
  );
}

export default App;
