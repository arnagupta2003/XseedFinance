import React from "react";
import "../css/navbar.css";
import { Link, useNavigate } from "react-router-dom";

const logo_dhando_src =
  "https://blogger.googleusercontent.com/img/a/AVvXsEg9iUHEWHtteJQ12NiYWssXwX6TTRnyhuhuav9pLcHp_c4FVukCDlSjRHz7WOJy1kgJDfQvaKQainp7YdKYwotdKaSA3cqqI8cXu6_S-xa2-nQq6lp0qno4oZIZ3-9PvQ1p_T5xx2IiXxUXHxjEo1BGJPk2Mbi4H_700TpaT6-5C7NZ8TfWp_U-r6_w=s1600";

function NavBar() {
  // const nav = useNavigate();
  // function handleNav(){
  //     nav("/tools");
  // }
  return (
    <nav class="navbar navbar-expand-lg bg-transparent" id="navbar">
      <div class="container-fluid ">
        <a class="navbar-brand" href="https://www.dhando.in/">
          <img
            src={logo_dhando_src}
            title="dhando.in"
            alt="dhando.in"
            width={"150px"}
          />
        </a>
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
              <a class="nav-link" aria-current="page" href="https://www.dhando.in/">
                Feed
              </a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="https://www.dhando.in/">
                Community
              </Link>
            </li>
            <li class="nav-item">
              {/* <button onClick={handleNav}>Tools</button> */}
              <Link
                class="nav-link"
                to="/tools"
                // onClick={handleNav}
                // id="navbarDropdown"
                // role="button"
                // data-bs-toggle="dropdown"
                // aria-expanded="false"
              >
                Tools
                {/* <i class="fa-solid fa-angle-down"></i> */}
                
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link class="dropdown-item" to="/fdCal">
                    FD Calculator
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/sipCal">
                    SIP Calculator
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/DreamCal">
                    Dream Come True
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/cryptoCal">
                    Crypto Calculator
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/incomeTax">
                    Income Tax Calculator
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/equityTax">
                    Equity Tax Calculator
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Learning 
              </Link>
            </li>
          </ul>
        </div>
        <form class="d-flex searchBar">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn" type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
