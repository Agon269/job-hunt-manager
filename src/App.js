import React, { useEffect, useReducer } from "react";
import { Container, Typography } from "@material-ui/core";
import AddJob from "./components/AddJob";
import MyTable from "./components/MyTable";
import Quote from "./components/Quote";
import Status from "./components/Status";
import "./style.css";
import WebSites from "./components/WebSites";

export const ACTIONS = {
  ADDJOB: "ADDJOB",
  DELETEJOB: "DELTEJOB",
  UPDATEJOB: "UPDATEJOB",
};
const reducer = (jobs, action) => {
  switch (action.type) {
    case ACTIONS.ADDJOB:
      return [...jobs, action.payload];
    case ACTIONS.DELETEJOB:
      const newJobs = jobs.filter((job) => action.payload !== job.id);
      return newJobs;
    case ACTIONS.UPDATEJOB:
      let objectIndex = jobs.findIndex((job) => action.payload.id === job.id);
      jobs[objectIndex].status = action.payload.stat;
      return [...jobs];
    default:
      return jobs;
  }
};

function App() {
  const [jobs, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("jobs")) || []
  );

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (newJob) => {
    dispatch({ type: ACTIONS.ADDJOB, payload: newJob });
  };
  const deleteJob = (id) => {
    dispatch({ type: ACTIONS.DELETEJOB, payload: id });
  };
  const updateJob = (id, stat) => {
    dispatch({ type: ACTIONS.UPDATEJOB, payload: { id, stat } });
  };
  return (
    <Container>
      <Quote />
      <WebSites />
      {jobs.length === 0 ? (
        <Typography variant="h4" style={{ color: "white" }}>
          Add your job applications.
        </Typography>
      ) : (
        <Status jobs={jobs} />
      )}
      <AddJob addJob={addJob} />
      <MyTable jobs={jobs} deleteJob={deleteJob} updateJob={updateJob} />
    </Container>
  );
}

export default App;
