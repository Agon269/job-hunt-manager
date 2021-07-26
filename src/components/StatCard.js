import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const StatCard = ({ head, color, number }) => {
  const useStyles = makeStyles((theme) => ({
    myCard: {
      minWidth: "300px",
      marginBottom: "20px",
    },
    stat: {
      border: `5px ${color} solid`,
      borderRadius: "50%",
      height: "34px",
      width: "34px",
      textAlign: "center",
      padding: "15px",
      display: "inline-block",
    },
  }));
  const classes = useStyles();

  return (
    <Card className={classes.myCard}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {head}
        </Typography>
        <Typography className={classes.stat} variant="h4" component="p">
          {number}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default StatCard;
