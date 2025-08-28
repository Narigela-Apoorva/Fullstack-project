import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav class="navbar  navbar-expand-lg bg-white border-bottom ">
      <div class="container-fluid " style={{ height: "45px" }}>
        <Link class="navbar-brand" to="/">
          <img
            className="ml-5"
            src="images/logo.svg"
            style={{ width: "25%" }}
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item ">
              <Link
                class="nav-link active"
                to="/products"
                role="button"
                aria-expanded="false"
              >
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/support">
                Support
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
