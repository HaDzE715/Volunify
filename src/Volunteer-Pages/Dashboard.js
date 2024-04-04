import React from "react";
import "../App.css";
import Program from "../Components/Volunter-Comps/Program";

function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="hey-section">
        <span>👋 Hey Hade!</span>
      </div>

      <p className="grey-text">
        Browse volunteering organizations and start volunteering!
      </p>

      <h2>Available Programs</h2>
      <div className="programs-container">
        <div className="Dashboard-programs">
          {" "}
          <Program></Program>
          <Program></Program>
          <Program></Program>
          <Program></Program>
          <Program></Program>
          <Program></Program>
          <Program></Program>
          <Program></Program>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
