import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import MainPage from "./components/pages/MainPage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import RegisterEmployer from "./components/auth/RegisterEmployer";
import LoginEmployer from "./components/auth/LoginEmployer";
import "./App.css";

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={MainPage} />
      <section className="container">
        <Switch>
          <Route exact path="/rejestracja" component={Register} />
          <Route exact path="/logowanie" component={Login} />
          <Route
            exact
            path="/pracodawcy/rejestracja"
            component={RegisterEmployer}
          />
          <Route exact path="/pracodawcy/logowanie" component={LoginEmployer} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
