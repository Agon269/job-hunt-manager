import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Fab, Box } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { nanoid } from "nanoid";
const INITIAL_STATE = {
  company: "",
  position: "",
  status: "",
  date: "",
};
const AddJob = ({ addJob, job, updateJob }) => {
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
    if (!job) {
      let newJob = {
        ...props,
        id: nanoid(),
      };
      addJob(newJob);
      setProps(INITIAL_STATE);
    } else {
      updateJob(job.id, props.status);
    }
  };
  return (
    <div>
      {!job ? (
        <Fab
          color="primary"
          className={classes.bt}
          aria-label="add"
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
      ) : (
        <Button onClick={handleClickOpen} color="primary" variant="contained">
          Update
        </Button>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {!job ? "Applied some where new?" : "Update staus"}
        </DialogTitle>
        <DialogContent>
          <form
            className={classes.form}
            onSubmit={(e) => handleSubmit(e)}
            noValidate
          >
            {!job ? (
              <>
                <TextField
                  value={props.company}
                  onChange={(e) => handleChange(e)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="Company"
                  label="Company"
                  name="company"
                  autoComplete="company"
                />
                <TextField
                  value={props.position}
                  onChange={(e) => handleChange(e)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="position"
                  label="Position"
                  name="position"
                  autoComplete="Position"
                />
                <Box display="flex" justifyContent="space-around">
                  <FormControl variant="outlined" className={classes.textField}>
                    <InputLabel>Status</InputLabel>
                    <Select
                      onChange={(e) => handleChange(e)}
                      value={props.status}
                      label="Status"
                      name="status"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"WFR"}>Waiting for reply</MenuItem>
                      <MenuItem value={"WFI"}>Interview</MenuItem>
                      <MenuItem value={"RJ"}>Rejected</MenuItem>
                      <MenuItem value={"ACC"}>Accepted</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    onChange={(e) => handleChange(e)}
                    value={props.value}
                    id="date"
                    label="Birthday"
                    type="date"
                    name="date"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
              </>
            ) : (
              <FormControl
                variant="outlined"
                fullWidth={true}
                className={classes.fullfiend}
              >
                <InputLabel>Status</InputLabel>
                <Select
                  onChange={(e) => handleChange(e)}
                  value={props.status}
                  label="Status"
                  name="status"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"WFR"}>Waiting for reply</MenuItem>
                  <MenuItem value={"WFI"}>Interview</MenuItem>
                  <MenuItem value={"RJ"}>Rejected</MenuItem>
                  <MenuItem value={"ACC"}>Accepted</MenuItem>
                </Select>
              </FormControl>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {!job ? "Add job" : "Update job"}
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
export default AddJob;
