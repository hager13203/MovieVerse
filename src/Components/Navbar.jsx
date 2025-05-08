import React, { Component } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router";
import { SearchContext } from "../Context/SearchContextProvider";

class Navbar extends Component {
  static contextType = SearchContext;

  handleSearch = (e) => {
    const { setSearchQuery } = this.context;
    console.log(e.target.value);
    setSearchQuery(e.target.value);
  };

  render() {
    const { searchQuery } = this.context;
    return (
      <>
        <nav className="navbar navbar-expand-lg  fixed-top mb-6 ">
          <div className="container-fluid">
            <Link className="navbar-brand logo fs-5" to="/">
              MovieVerse
            </Link>

            {/* Toggler */}
            <button
              className="navbar-toggler text-center custom-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse navbar-dark "
              id="navbarNav"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link  m" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/trailer">
                    Trailers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li> */}
              </ul>

              {/* Search Form */}
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={this.handleSearch}
                  style={{ width: "300px" }}
                />
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
