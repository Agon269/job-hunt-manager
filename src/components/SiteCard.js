import React from "react";
import { Box, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles, Fab } from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
const SiteCard = ({ name, link, deleteSite, id }) => {
  const useStyles = makeStyles((theme) => ({
    myCard: {
      minWidth: "280px",
      marginBottom: "20px",
      marginLeft: "10px",
    },
  }));
  const classes = useStyles();

  return (
    <Card className={classes.myCard}>
      <CardContent>
        <a href={link} target="_blank" rel="noreferrer">
          <Typography variant="h4" gutterBottom>
            {name}
          </Typography>
        </a>
        <Box display="flex" justifyContent="flex-end">
          <Fab
            color="secondary"
            onClick={() => {
              deleteSite(id);
            }}
          >
            <DeleteIcon />
          </Fab>
        </Box>
      </CardContent>
    </Card>
  );
};
export default SiteCard;
