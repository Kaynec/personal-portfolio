import React, { useState } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import { IconButton } from "@material-ui/core";
import useStyles from "./styles";
const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <div id="Contact">
        <h1>Let's Talk!</h1>
        <div className="contact-icons">
          <div>
            <EmailIcon className={classes.IconButton} fontSize="large" />
            <h4> once462@gmail.com</h4>
          </div>
          <div>
            <PhoneAndroidIcon className={classes.IconButton} fontSize="large" />
            <h4>09306434254</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
