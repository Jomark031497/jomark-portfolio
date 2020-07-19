import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    color: theme.palette.primary.main,
    textAlign: "center",
    padding: "10px",
    background: "rgba(0,0,0,0.4)",
    margin: "20px 20px",
    height: "100%",
    borderRadius: "20px",
  },
  contactCard: {
    color: theme.palette.primary.main,
    textAlign: "center",
    height: "100%",
    margin: "20px 20px",
    background: "rgba(0,0,0,0.4)",
    padding: "10px",
    borderRadius: "20px",
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
    <Box className={classes.root}>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} sm={4}>
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

        <Grid item xs={12} sm={4}>
          <Box component="div" className={classes.contactCard}>
            <Typography variant="h6">CONTACT CARD</Typography>
            <br />
            <Box component="div" className={classes.contactInfo}>
              <Typography variant="subtitle1" color="primary">
                Email:
              </Typography>
              <Typography variant="subtitle1" color="secondary">
                jomarkrazonpangan@gmail.com
              </Typography>
              <br />
              <Typography variant="subtitle1" color="primary">
                Phone:
              </Typography>
              <Typography variant="subtitle1" color="secondary">
                (+63) 995 - 734 -0183
              </Typography>

              <br />
              <Typography variant="subtitle1" color="primary    ">
                Github:
              </Typography>
              <Typography variant="subtitle1" color="secondary">
                https://github.com/Jomark031497
              </Typography>
              <br />
              <Typography variant="subtitle1" color="primary    ">
                Facebook:
              </Typography>
              <Typography variant="subtitle1" color="secondary">
                https://www.facebook.com/jomarkrazonpangan
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contacts;
