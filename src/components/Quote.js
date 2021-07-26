import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  quote: {
    color: "white",
  },
  quoteBox: {
    justifyContent: "center",
    marginTop: "40px",
  },
}));

const Quote = () => {
  const classes = useStyles();
  const [quote, setQuote] = useState("Good luck");
  useEffect(() => {
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((res) => res.json())
      .then((result) => {
        setQuote(result);
      });
  }, [setQuote]);

  return (
    <Box className={classes.quoteBox} display="flex">
      <Typography className={classes.quote} variant="h5">
        ""{quote}"" - Ron Swanson
      </Typography>
    </Box>
  );
};
export default Quote;
