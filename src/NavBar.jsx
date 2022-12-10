import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div id="navBar">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#aboutMe">
            <h1>
              <strong>E</strong>
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active"
                aria-current="page"
                href="#aboutMe"
              >
                <strong> aboutMe. </strong>
              </a>
              <a className="nav-link active" aria-current="page" href="#myWork">
                <strong>myWork.</strong>
              </a>
              <a
                className="nav-link active"
                aria-current="page"
                href="#contactMe"
              >
                <strong>contactMe.</strong>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
