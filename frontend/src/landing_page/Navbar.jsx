import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom py-3"  style={{backgroundColor:"#FFF"}}>
      <div class="container">
        <Link class="navbar-brand" to="/" style={{marginLeft: "5%"}}>
          <img src="media/images/logo.svg" alt="" style={{width: "22%"}}/>
        </Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-5">
            <li class="nav-item px-3">
              <Link class="nav-link" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item px-3">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item px-3">
              <Link class="nav-link" to="/product">
                Products
              </Link>
            </li>
            <li class="nav-item px-3">
              <Link class="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item px-3">
              <Link class="nav-link" to="/support">
                Support
              </Link>
            </li>
            <li class="nav-item px-3">
                <a class="nav-link" href="/">
                    <i class="fa-solid fa-bars"></i>
                </a>
            </li>
            
          </ul>
          <form class="d-flex" role="search">
            
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
