import React from "react";
import "../../App.css";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import Avatar from "@mui/material/Avatar";

function Topbar({ username, displayName, profilePic }) {
  return (
    <div className="Topbar">
      <div className="left">
        <span>Home</span>
      </div>
      <div className="right">
        <div className="notification">
          <NotificationsIcon />
        </div>
        <div className="separator"></div>
        <div className="profile">
          <Avatar alt="Profile Picture" src={profilePic} />
          <div className="profile-info">
            <span className="larger-span">{username}</span>
            <span className="smaller-span">{displayName}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
