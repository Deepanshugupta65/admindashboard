// Importing React for creating components
import React from "react";

// Importing the CSS file for styling
import "./topbar.css";

// Importing Material-UI icons for the topbar
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

// Functional component for the top navigation bar
export default function Topbar() {
  return (
    // Main container for the top navigation bar
    <div className="topbar">
      {/* Wrapper for the content within the top navigation bar */}
      <div className="topbarWrapper">
        {/* Left section of the top navigation bar */}
        <div className="topLeft">
          {/* Logo */}
          <span className="logo">shopify</span>
        </div>

        {/* Right section of the top navigation bar */}
        <div className="topRight">
          {/* Container for the notifications icon */}
          <div className="topbarIconContainer">
            <NotificationsNone />
            {/* Badge indicating the number of notifications */}
            <span className="topIconBadge">2</span>
          </div>

          {/* Container for the language icon */}
          <div className="topbarIconContainer">
            <Language />
            {/* Badge indicating the language count */}
            <span className="topIconBadge">2</span>
          </div>

          {/* Container for the settings icon */}
          <div className="topbarIconContainer">
            <Settings />
          </div>

          {/* User avatar */}
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
