import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import * as emailjs from "emailjs-com";

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
    emailjs
      .sendForm(
        "gmail",
        "template_gGE0RwgK",
        ".form-container",
        "user_MdnqgFUFdNWPOOf7uNeJE"
      )
      .then()
      .catch();

    setName("");
    setEmailAddress("");
    setCompanyName("");
    setMessage("");
    alert("Feedback sent!");
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
                variant="outlined"
                label="Name"
                fullWidth={true}
                required
                margin="dense"
                size="medium"
                color="primary"
                inputProps={{ style: { color: "tan" } }}
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
                margin="dense"
                size="medium"
                inputProps={{ style: { color: "tan" } }}
              />

              <TextField
                name="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                variant="outlined"
                label="Company Name"
                fullWidth={true}
                margin="dense"
                size="medium"
                inputProps={{ style: { color: "tan" } }}
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
                margin="dense"
                size="medium"
                required
                inputProps={{ style: { color: "tan" } }}
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
