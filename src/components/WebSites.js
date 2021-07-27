import React, { useReducer, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import SiteCard from "./SiteCard";
import AddSite from "./AddSite";
const useStyles = makeStyles((theme) => ({
  statContainer: {
    flexWrap: "wrap",
    marginTop: "40px",
    justifyContent: "space-between",
  },
  txt: {
    color: "white",
  },
}));
export const ACTIONS = {
  ADDSITE: "ADDSITE",
  DELETESITE: "DELETESITE",
};
const reducer = (sites, action) => {
  switch (action.type) {
    case ACTIONS.ADDSITE:
      return [...sites, action.payload];
    case ACTIONS.DELETESITE:
      const newSites = sites.filter((site) => action.payload !== site.id);
      return newSites;
    default:
      return sites;
  }
};
export default function WebSites() {
  const classes = useStyles();
  const [sites, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("sites")) || []
  );

  useEffect(() => {
    localStorage.setItem("sites", JSON.stringify(sites));
  }, [sites]);

  const addSite = (newSite) => {
    dispatch({ type: ACTIONS.ADDSITE, payload: newSite });
  };
  const deleteSite = (id) => {
    dispatch({ type: ACTIONS.DELETESITE, payload: id });
  };
  return (
    <>
      <Box display="flex" className={classes.statContainer}>
        {sites.length === 0 ? (
          <Typography variant={"h4"} className={classes.txt}>
            Add WebSites that help you hunt for jobs
          </Typography>
        ) : (
          sites.map((site, i) => {
            return (
              <SiteCard
                key={i}
                name={site.name}
                deleteSite={deleteSite}
                link={site.link}
                id={site.id}
              />
            );
          })
        )}
      </Box>

      <AddSite addSite={addSite} />
    </>
  );
}
