import React from "react";
import RequestsTable from "../Components/Org-Comps/RequestTable";

function Requests() {
  // Hardcoded data for requests
  const rows = [
    {
      name: "TESTTEST",
      status: "Active",
      volunteersno: 6.0,
      location: "Tel-aviv Yafo",
      daterange: "2024-01-04-2024-30-04",
      volunteers: [
        {
          name: "Volunteer 3",
          status: "Pending",
          age: 24,
          sex: "Male",
          availability: "MON-FRI",
          dateapplied: "04-04-2024",
        },
        {
          name: "Volunteer 3",
          status: "Pending",
          age: 24,
          sex: "Male",
          availability: "MON-FRI",
          dateapplied: "04-04-2024",
        },
        {
          name: "Volunteer 3",
          status: "Pending",
          age: 24,
          sex: "Male",
          availability: "MON-FRI",
          dateapplied: "04-04-2024",
        },
      ],
    },
    {
      name: "TESTTEST",
      status: "Active",
      volunteersno: 6.0,
      location: "Tel-aviv Yafo",
      daterange: "2024-01-04-2024-30-04",
      volunteers: [
        {
          name: "Volunteer 3",
          status: "Pending",
          age: 24,
          sex: "Male",
          availability: "MON-FRI",
          dateapplied: "04-04-2024",
        },
        {
          name: "Volunteer 3",
          status: "Pending",
          age: 24,
          sex: "Male",
          availability: "MON-FRI",
          dateapplied: "04-04-2024",
        },
        {
          name: "Volunteer 3",
          status: "Pending",
          age: 24,
          sex: "Male",
          availability: "MON-FRI",
          dateapplied: "04-04-2024",
        },
      ],
    },
  ];

  return (
    <div className="Dashboard">
      <div className="hey-section">
        <span>Requests</span>
      </div>

      <p className="grey-text">
        You can check which volunteer wants to participate in your program!
      </p>

      <div className="programs-header">
        <h2>Your Programs</h2>
        <h2 className="program-count">(3)</h2>
      </div>
      <RequestsTable data={rows} />
    </div>
  );
}

export default Requests;
