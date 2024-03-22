import React from "react";
import "../App.css";
import Program from "../Components/Program";

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
      <div>
        {" "}
        <Program></Program>
      </div>
    </div>
  );
}

export default Dashboard;
