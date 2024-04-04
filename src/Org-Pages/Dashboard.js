import React from "react";
import "../App.css";
import ProgramTable from "../Components/Org-Comps/ProgramsTable";

function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="hey-section">
        <span>👋 Hey Aluma!</span>
      </div>

      <p className="grey-text">
        Browse volunteering organizations and start volunteering!
      </p>

      <div className="programs-header">
        <h2>Your Programs</h2>
        <h2 className="program-count">(3)</h2>
      </div>
      <ProgramTable />
    </div>
  );
}

export default Dashboard;
