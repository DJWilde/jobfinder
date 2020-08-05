import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            JobFinder
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/o_nas">
                  O nas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pomoc">
                  Pomoc
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kontakt">
                  Kontakt
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/oferty">
                  Oferty
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pracodawcy">
                  Pracodawcy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rejestracja">
                  Rejestracja
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logowanie">
                  Zaloguj się
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
