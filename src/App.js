import React from "react";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Forgot from "./components/pages/Forgot";
import Signup from "./components/pages/Signup";
import Dashboard from "./components/pages/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/login">
          <Header />
          <Login />
        </Route>
        <Route path="/forgot">
          <Header />
          <Forgot />
        </Route>
        <Route path="/signup">
          <Header />
          <Signup />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
