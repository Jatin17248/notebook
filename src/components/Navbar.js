import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
export default function Navbar() {
  let location = useLocation();
  const context = useContext(noteContext);
  const {setNotes} = context;
  let navigate = useNavigate();
  const handleLogout = () => {
    setNotes([]);
    localStorage.removeItem("token");
    navigate('/login');
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Notebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=" /navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    ((location.pathname==="/")? "active": "").toString()
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                     ((location.pathname==="/about")? "active": "").toString()
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex" style={{ whiteSpace: "nowrap" }}>
          {
            
              localStorage.getItem('token')?(<>
              
              <Link to="/user" className="btn btn-primary mx-1 flex-grow-2 ">
              <i className="bi bi-person-circle"></i>
              </Link>
              <button
                onClick={handleLogout}
                className="btn btn-primary mx-1 flex-grow-2 "
              >
                Log Out
              </button></>
              ):(
              <div><Link to="/login" className="btn btn-primary mx-1 flex-grow-2 ">
                Login
              </Link>
              <Link to="/signup" className="btn btn-primary mx-1 me-2">
                Sign Up
              </Link></div>
              )
            
          }
        </div>
      </nav>
    </div>
  );
}
