import React from "react";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";

function VolunteerTable({ volunteers, onVolunteerClick }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell align="left" sx={{ fontWeight: "bold" }}>
            Name
          </TableCell>
          <TableCell align="left" sx={{ fontWeight: "bold" }}>
            Status
          </TableCell>
          <TableCell align="left" sx={{ fontWeight: "bold" }}>
            Availability
          </TableCell>
          <TableCell align="left" sx={{ fontWeight: "bold" }}>
            Last Report
          </TableCell>
          <TableCell align="left" sx={{ fontWeight: "bold" }}>
            Start Date
          </TableCell>
          <TableCell align="left" sx={{ fontWeight: "bold" }}>
            End Date
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {volunteers.map((volunteer, index) => (
          <TableRow
            key={index}
            hover
            onClick={() => onVolunteerClick(volunteer)}
          >
            <TableCell />
            <TableCell>{volunteer.name}</TableCell>
            <TableCell>{volunteer.status}</TableCell>
            <TableCell>{volunteer.availability}</TableCell>
            <TableCell>{volunteer.lastreport}</TableCell>
            <TableCell>{volunteer.startdate}</TableCell>
            <TableCell>{volunteer.enddate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

VolunteerTable.propTypes = {
  volunteers: PropTypes.array.isRequired,
  onVolunteerClick: PropTypes.func.isRequired,
};

export default VolunteerTable;
