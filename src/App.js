import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./Components/CommonComps/sidebar";
import Topbar from "./Components/CommonComps/Topbar";

import VolunteerDashboard from "./Volunteer-Pages/Dashboard";
import VolunteerProgress from "./Volunteer-Pages/Progress";
import VolunteerIndividual from "./Volunteer-Pages/Individual";

import OrganizationDashboard from "./Org-Pages/Dashboard";
import ProfilePic1 from "./Pictures/me.png";
import ProfilePic2 from "./Pictures/Program.png";

function App() {
  const userType = "user1"; // or "user1" for the other user
  const userInfo =
    userType === "user1"
      ? {
          username: "HaDzE711",
          displayName: "Hade Bayaa",
          profilePic: ProfilePic1,
        }
      : {
          username: "Aluma",
          displayName: "Aluma Organaization",
          profilePic: ProfilePic2,
        };

  return (
    <Router>
      <div className="App">
        <Sidebar userType={userType} />
        <div className="main-content">
          <Topbar {...userInfo} />
          <Routes>
            {userType === "user1" && (
              <>
                <Route path="/" element={<VolunteerDashboard />} />
                <Route path="/dashboard" element={<VolunteerDashboard />} />
                <Route path="/progress" element={<VolunteerProgress />} />
                <Route path="/individual" element={<VolunteerIndividual />} />
              </>
            )}
            {userType === "user2" && (
              <>
                <Route path="/" element={<OrganizationDashboard />} />
                <Route path="/dashboard" element={<OrganizationDashboard />} />
                {/* <Route path="/program" element={<AdminProgress />} /> */}
                {/* <Route path="/requests" element={<AdminIndividual />} /> */}
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
