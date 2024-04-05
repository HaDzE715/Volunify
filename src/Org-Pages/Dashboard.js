import React from "react";
import "../App.css";
import CollapsibleTable from "../Components/Org-Comps/CollapsibleTable";

function Dashboard() {
  const rows = [
    {
      name: "Bet Avot",
      status: "Active",
      volunteersno: 6.0,
      location: "Tel-aviv Yafo",
      daterange: "2024-01-04-2024-30-04",
      volunteers: [
        {
          name: "Hade Bayaa",
          status: "Active",
          availability: "MON-FRI",
          lastreport: "2024-02-02",
          startdate: "2024-01-04",
          enddate: "2024-30-04",
          reports: [
            {
              date: "2024-01-01",
              content: "Well today I liked how the new culture is gathering",
            },
            {
              date: "2024-01-15",
              content:
                "I like it alot how the summer kisses the sun and the sun is not kissing anyoneI like it alot how the summer kisses the sun and the sun is not kissing anyoneI like it alot how the summer kisses the sun and the sun is not kissing anyoneI like it alot how the summer kisses the sun and the sun is not kissing anyoneI like it alot how the summer kisses the sun and the sun is not kissing anyoneI like it alot how the summer kisses the sun and the sun is not kissing anyoneI like it alot how the summer kisses the sun and the sun is not kissing anyoneI like it alot how the summer kisses the sun and the sun is not kissing anyone",
            },
            {
              date: "2024-01-21",
              content: "Well Thats good!",
            },
          ],
        },
        {
          name: "John Doe",
          status: "Inactive",
          availability: "SUN-TUE",
          lastreport: "2024-02-02",
          startdate: "2024-02-01",
          enddate: "2024-02-29",
        },
        {
          name: "John Doe",
          status: "Inactive",
          availability: "MON-WED",
          lastreport: "2024-02-02",
          startdate: "2024-02-01",
          enddate: "2024-02-29",
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
          name: "Hade Bayaa",
          status: "Active",
          availability: "MON-FRI",
          lastreport: "2024-02-02",
          startdate: "2024-01-04",
          enddate: "2024-30-04",
        },
        {
          name: "John Doe",
          status: "Inactive",
          availability: "SUN-TUE",
          lastreport: "2024-02-02",
          startdate: "2024-02-01",
          enddate: "2024-02-29",
        },
        {
          name: "John Doe",
          status: "Inactive",
          availability: "MON-WED",
          lastreport: "2024-02-02",
          startdate: "2024-02-01",
          enddate: "2024-02-29",
        },
      ],
    },
  ];
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
      <CollapsibleTable data={rows} type={1} /> {/** Type 1 for volunteer tables!*/}
    </div>
  );
}

export default Dashboard;
