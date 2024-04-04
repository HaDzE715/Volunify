import React from "react";
import "../../App.css";
import { SidebarData } from "./SidebarData";
import Logo from "../../Pictures/logo.jpg";
import LogoutIcon from "@mui/icons-material/LogoutOutlined";

function Sidebar({ userType }) {
  const sidebarData =
    userType === "user1" ? SidebarData.user1 : SidebarData.user2;

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <h1>Volunify</h1>
        </div>
        {sidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
        <li
          className="row logout"
          onClick={() => {
            window.location.pathname = "/logout";
          }}
        >
          <div id="icon">
            <LogoutIcon />
          </div>
          <div id="title">Logout</div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
