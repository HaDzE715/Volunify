import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Progpic from "../../Pictures/Program.png";

function createData(
  name,
  status,
  volunteersno,
  location,
  daterange,
  volunteersList
) {
  return {
    name,
    status,
    volunteersno,
    location,
    daterange,
    volunteers: volunteersList,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

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
        <TableCell align="left">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={Progpic}
              alt="Event"
              style={{
                marginRight: "8px",
                width: "40px",
                height: "40px",
                marginLeft: "-28px",
              }}
            />
            {row.name}
          </Box>
        </TableCell>
        <TableCell align="right">{row.status}</TableCell>
        <TableCell align="right" sx={{ paddingRight: "60px" }}>
          {row.volunteersno}
        </TableCell>
        <TableCell align="right">{row.location}</TableCell>
        <TableCell align="right">{row.daterange}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 2 }}>
              <Typography variant="h6" gutterBottom component="div">
                Volunteers
              </Typography>
              <Table size="small" aria-label="volunteers">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>Availability</TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>Last Report</TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>Start Date</TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>End Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.volunteers.map((volunteer, index) => (
                    <TableRow key={index} sx={{ borderBottom: "unset" }}>
                      <TableCell>{volunteer.name}</TableCell>
                      <TableCell>{volunteer.status}</TableCell>
                      <TableCell align="right">
                        {volunteer.availability}
                      </TableCell>
                      <TableCell align="right">
                        {volunteer.lastreport}
                      </TableCell>
                      <TableCell align="right">{volunteer.startdate}</TableCell>
                      <TableCell align="right">{volunteer.enddate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    status: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    volunteersno: PropTypes.number.isRequired,
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
    name: PropTypes.string.isRequired,
    enddate: PropTypes.string.isRequired,
    startdate: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "Bet Avot",
    "Active",
    6.0,
    "Tel-aviv Yafo",
    "2024-01-04-2024-30-04",
    [
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
    ]
  ),
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
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
