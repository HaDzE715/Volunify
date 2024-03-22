import React from "react";
import DashboardIcon from "@mui/icons-material/DashboardOutlined";
import ProgressIcon from "@mui/icons-material/AddchartOutlined";
import MessageIcon from "@mui/icons-material/SendOutlined";
import IndividualIcon from "@mui/icons-material/VolunteerActivismOutlined";
export const SidebarData = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "Progress",
    icon: <ProgressIcon />,
    link: "/progress",
  },
  {
    title: "Messages",
    icon: <MessageIcon />,
    link: "/messages",
  },
  {
    title: "Individual",
    icon: <IndividualIcon />,
    link: "/individual",
  },
];
