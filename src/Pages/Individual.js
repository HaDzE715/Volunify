import React from "react";
import "../App.css";
import Program from "../Components/Program";

function Individual() {
  return (
    <div className="Progress">
      <div className="Progress-Title">
        <span>Individual</span>
      </div>

      <p className="grey-text">
        Volunteer Individually and help others achieve small tasks!
      </p>

      <h2>Available Programs</h2>
      <div>
        {" "}
        <Program></Program>
      </div>
    </div>
  );
}

export default Individual;
