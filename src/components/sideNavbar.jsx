import React, { Component } from "react";

class SideNavbar extends Component {
  render() {
    return (
      <div className="wrapper">
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>Sweet</h3>
          </div>
          <ul className="list-unstyled components">
            <li>
              <a href="/application">Application</a>
            </li>
            <li>
              <a href="#">Data</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SideNavbar;
