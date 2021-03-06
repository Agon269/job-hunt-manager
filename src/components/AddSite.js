import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { nanoid } from "nanoid";

const INITIAL_STATE = {
  name: "",
  link: "",
};
const AddSite = ({ addSite }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    textField: {
      width: "48%",
      marginTop: "10px",
    },
    bt: {
      marginBottom: "20px",
    },
  }));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [props, setProps] = useState(INITIAL_STATE);
  const classes = useStyles();
  const handleChange = ({ target }) => {
    setProps((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newSite = {
      ...props,
      id: nanoid(),
    };
    addSite(newSite);
    setProps(INITIAL_STATE);
  };
  return (
    <div>
      <Fab
        color="primary"
        className={classes.bt}
        aria-label="add"
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Widen your horizon</DialogTitle>
        <DialogContent>
          <form
            className={classes.form}
            onSubmit={(e) => handleSubmit(e)}
            noValidate
          >
            <TextField
              value={props.name}
              onChange={(e) => handleChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
              autoComplete="web site name"
            />
            <TextField
              value={props.link}
              onChange={(e) => handleChange(e)}
              variant="outlined"
              margin="normal"
              placeholder="https://something.com"
              required
              fullWidth
              id="link"
              label="link"
              name="link"
              autoComplete="link"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add site
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default AddSite;
