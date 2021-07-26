import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import StatCard from "./StatCard";
import counter from "../utils/counter";
const useStyles = makeStyles((theme) => ({
  statContainer: {
    flexWrap: "wrap",
    marginTop: "40px",
    justifyContent: "space-between",
  },
}));
export default function Status({ jobs }) {
  let stats = counter(jobs);

  const classes = useStyles();
  return (
    <Box display="flex" className={classes.statContainer}>
      <StatCard color="blue" head="Applied" number={jobs.length} />
      <StatCard color="orange" head="No reply " number={stats.WFR} />
      <StatCard color="yellow" head="Interview" number={stats.WFI} />
      <StatCard color="red" head="Rejected" number={stats.RJ} />
    </Box>
  );
}
