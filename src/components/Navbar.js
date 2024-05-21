import React from "react";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import Logo from "../img/SQ-logo.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import LogIn from "./blogList/LogIn";

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="logo" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/destination">
                  Destination guides
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/recipes">
                  Recipes
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              {/* {isAuth ? (
                <div className="btn-container btn-sm">
                  <button onClick={signOut(auth)} className="logOut-btn">
                    Log Out
                  </button>
                </div>
              ) : (
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Account
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/authentication">
                        Log In
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/signup">
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </li>
              )} */}
            </ul>
          </div>
        </div>

        <div>
          {user && (
            <>
              <span className="pe-4">
                Signed In as {user.displayName || user.email}
              </span>
              <button
                className="me-3 logOutbtn"
                onClick={() => {
                  signOut(auth);
                }}
              >
                Log out
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
