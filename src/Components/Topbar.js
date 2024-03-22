import React from "react";
import "../App.css";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import Avatar from "@mui/material/Avatar";
import ProfilePic from "../Pictures/me.png";

function Topbar() {
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
          <Avatar alt="Profile Picture" src={ProfilePic} />
          <div className="profile-info">
            <span className="larger-span">HaDzE711</span>
            <span className="smaller-span">Hade Bayaa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
