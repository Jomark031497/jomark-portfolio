import React, { useState } from "react";
import { Box, Grid, Typography, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    color: theme.palette.primary.main,
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    padding: "10px",
    background: "rgba(0,0,0,0.4)",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
  input: {
    background: "#cdcdcd",
    margin: "10px auto",
  
  },
}));

//--------------------------------    MAIN COMPONENT    ------------------------------------
const Contacts = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, emailAddress, companyName, message);
    setName("");
    setEmailAddress("");
    setCompanyName("");
    setMessage("");
  };

  return (
    <>
    
      <Box component="div">
        <Grid container justify="center">
          <Box className={classes.formContainer}>
            <form onSubmit={handleSubmit} className="form-container">
              <Typography variant="h6">SEND ME A FEEDBACK!</Typography>

              <TextField
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                label="Name"
                fullWidth={true}
                required
                variant="outlined"
                className={classes.input}
                size="medium"
              />
              <br />
              <TextField
                name="emailAddress"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                variant="outlined"
                label="Email"
                fullWidth={true}
                required
                className={classes.input}
                size="medium"
              />

              <TextField
                name="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                variant="outlined"
                label="Company Name"
                fullWidth={true}
                className={classes.input}
                size="medium"
              />
              <br />

              <TextField
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                variant="outlined"
                label="Message"
                multiline
                rowsMax={4}
                fullWidth={true}
                className={classes.input}
                size="medium"
                required
              />
              <br />

              <Button
                className={classes.button}
                variant="outlined"
                fullWidth={true}
                type="submit"
                endIcon={<SendIcon />}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Grid>
      </Box>

    
    </>
  );
};

export default Contacts;
