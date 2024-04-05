import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Row from "./ProgramsTable";

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

export default function CollapsibleTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: "90%", marginTop: "2%", maxHeight: "70vh" }}
    >
      <Table aria-label="collapsible table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Program Name
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Status
            </TableCell>
            <TableCell align="right" colSpan={1} sx={{ fontWeight: "bold" }}>
              Volunteers No.
            </TableCell>
            <TableCell
              align="right"
              sx={{ paddingRight: "30px", fontWeight: "bold" }}
            >
              Location
            </TableCell>
            <TableCell
              align="right"
              sx={{ paddingRight: "55px", fontWeight: "bold" }}
            >
              Date Range
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ overflowY: "auto" }}>
          {rows.map((row, index) => (
            <Row key={index} data={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
