import React, { useState } from "react";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function CollapsibleProgramsTable({ data }) {
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
          {data.map((row, index) => (
            <Row key={index} data={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function Row({ data }) {
  const { name, status, volunteersno, location, daterange, volunteers } = data;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left">{name}</TableCell>
        <TableCell align="right">{status}</TableCell>
        <TableCell align="right" sx={{ paddingRight: "60px" }}>
          {volunteersno}
        </TableCell>
        <TableCell align="right">{location}</TableCell>
        <TableCell align="right">{daterange}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 2 }}>
              <Typography variant="h6" gutterBottom component="div">
                Requests
              </Typography>
              <VolunteerTable volunteers={volunteers} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    volunteersno: PropTypes.number.isRequired,
    daterange: PropTypes.string.isRequired,
    volunteers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        availability: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

function VolunteerTable({ volunteers }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
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
            Age
          </TableCell>
          <TableCell align="left" sx={{ fontWeight: "bold" }}>
            Sex
          </TableCell>
          <TableCell align="left" sx={{ fontWeight: "bold" }}>
            Date Applied
          </TableCell>
          <TableCell align="left" sx={{ fontWeight: "bold" }}>
            Actions
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {volunteers.map((volunteer, index) => (
          <TableRow key={index} hover>
            <TableCell>{volunteer.name}</TableCell>
            <TableCell>{volunteer.status}</TableCell>
            <TableCell>{volunteer.availability}</TableCell>
            <TableCell>{volunteer.age}</TableCell>
            <TableCell>{volunteer.sex}</TableCell>
            <TableCell>{volunteer.dateapplied}</TableCell>
            <TableCell>
              <Button
                style={{
                  marginRight: 8,
                  backgroundColor: "green",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "darkgreen",
                    color: "white",
                  },
                }}
                variant="contained"
              >
                Accept
              </Button>
              <Button
                style={{
                  borderColor: "red",
                  color: "red",
                  "&:hover": {
                    borderColor: "darkred",
                    color: "darkred",
                    backgroundColor: "transparent",
                  },
                }}
                variant="outlined"
              >
                Reject
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

VolunteerTable.propTypes = {
  volunteers: PropTypes.array.isRequired,
};

export default CollapsibleProgramsTable;
