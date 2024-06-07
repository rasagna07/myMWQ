// import React from 'react';
import React, { Component } from 'react'; 


class navbar extends Component {
    state = {  } 
    render() { 
        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
           BeMyFriend
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#wmqHeading">
                Why BMF?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#htwCaption">
             How BMF works?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
           About Us
                </a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link" href="#footer">
              Contact Us
                </a>
              </li>
             
             
            </ul>
            <ul className="navbar-nav me mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link" href="#">
             SignIn
                </a>
              </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
             SignUp
                </a>
              </li>
              </ul>
           
          </div>
        </div>
      </nav>
      );
    }
}
 
export default navbar;
