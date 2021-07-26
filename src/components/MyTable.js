import React from "react";
import {
  TableHead,
  Table,
  TableContainer,
  Paper,
  TableCell,
  Typography,
  TableBody,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const MyTable = ({ jobs }) => {
  const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
  }));

  const classes = useStyles();
  const headers = ["Company", "Position", "Status", "Date"];
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          {headers.map((head, i) => (
            <TableCell key={i}>
              <Typography variant="h5">{head}</Typography>
            </TableCell>
          ))}
        </TableHead>
        <TableBody>
          {jobs.map((job, i) => {
            return (
              <TableRow key={i}>
                <TableCell scope="row">{job.company}</TableCell>
                <TableCell>{job.position}</TableCell>
                <TableCell>{job.status}</TableCell>
                <TableCell>{job.date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default MyTable;
