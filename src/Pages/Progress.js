import React from "react";
import "../App.css";
import ProgramProgress from "../Components/ProgramProgress";

function Progress() {
  return (
    <div className="Progress">
      <div className="Progress-Title">
        <span>Progress</span>
      </div>

      <p className="grey-text">
        Track your progress and update them accordingly!
      </p>

      <h2>Your current Programs</h2>
      <div style={{ display: "flex" }}>
        {" "}
        <ProgramProgress />
      </div>
    </div>
  );
}

export default Progress;
