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
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import AddJob from "./AddJob";
import { toText } from "../utils/totext";
const MyTable = ({ jobs, deleteJob, updateJob }) => {
  const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
  }));

  const classes = useStyles();
  const headers = ["Company", "Position", "Status", "Date", "Delete", "Update"];
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((head, i) => (
              <TableCell key={i}>
                <Typography variant="h5">{head}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map((job, i) => {
            return (
              <TableRow key={i}>
                <TableCell scope="row">{job.company}</TableCell>
                <TableCell>{job.position}</TableCell>
                <TableCell>{toText(job.status)}</TableCell>
                <TableCell>{job.date}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => deleteJob(job.id)}
                    color="secondary"
                    variant="outlined"
                  >
                    Delete
                  </Button>
                </TableCell>
                <TableCell>
                  <AddJob job={job} updateJob={updateJob} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default MyTable;
