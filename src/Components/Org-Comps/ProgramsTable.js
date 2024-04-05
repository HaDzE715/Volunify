import React, { useState } from "react";
import PropTypes from "prop-types";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import VolunteerTable from "./VolunteerTable"; // Import updated VolunteerTable component
import ReportModal from "../../Modals/ReportsModal";

function Row({ data, type }) {
  const { name, status, volunteersno, location, daterange, volunteers } = data;
  const [open, setOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  const handleVolunteerClick = (volunteer) => {
    setSelectedVolunteer(volunteer);
    setReportModalOpen(true);
  };
  console.log("RowData:", volunteers);

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
                Volunteers
              </Typography>
              <VolunteerTable
                volunteers={volunteers}
                onVolunteerClick={handleVolunteerClick}
              />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <ReportModal
        open={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        volunteer={selectedVolunteer}
      />
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
        lastreport: PropTypes.string.isRequired,
        startdate: PropTypes.string.isRequired,
        enddate: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  type: PropTypes.number.isRequired, // Added prop type
};

export default Row;
