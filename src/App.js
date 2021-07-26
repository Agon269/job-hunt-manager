import React, { useEffect, useReducer } from "react";
import { Container } from "@material-ui/core";
import AddJob from "./components/AddJob";
import MyTable from "./components/MyTable";
import Quote from "./components/Quote";
import Status from "./components/Status";
import "./style.css";
export const ACTIONS = {
  ADDJOB: "ADDJOB",
};
const reducer = (jobs, action) => {
  switch (action.type) {
    case ACTIONS.ADDJOB:
      return [...jobs, action.payload];
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
    console.log("sd");
    dispatch({ type: ACTIONS.ADDJOB, payload: newJob });
  };
  return (
    <Container>
      <Quote />
      <AddJob addJob={addJob} />
      <Status jobs={jobs} />
      <MyTable jobs={jobs} />
    </Container>
  );
}

export default App;
