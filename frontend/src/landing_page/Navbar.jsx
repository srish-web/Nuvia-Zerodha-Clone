import React from "react";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom py-3"  style={{backgroundColor:"#FFF"}}>
      <div class="container">
        <a class="navbar-brand" href="#" style={{marginLeft: "5%"}}>
          <img src="media/images/logo.svg" alt="" style={{width: "22%"}}/>
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-5">
            <li class="nav-item px-3">
              <a class="nav-link" href="#">
                Signup
              </a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="#">
                Product
              </a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="#">
                Support
              </a>
            </li>
            <li class="nav-item px-3">
                <a class="nav-link">
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
