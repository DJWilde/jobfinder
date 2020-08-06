import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import MainPage from "./components/pages/MainPage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import RegisterEmployer from "./components/auth/RegisterEmployer";
import LoginEmployer from "./components/auth/LoginEmployer";
import Alert from "./components/layout/Alert";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={MainPage} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/rejestracja" component={Register} />
            <Route exact path="/logowanie" component={Login} />
            <Route
              exact
              path="/pracodawcy/rejestracja"
              component={RegisterEmployer}
            />
            <Route
              exact
              path="/pracodawcy/logowanie"
              component={LoginEmployer}
            />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
