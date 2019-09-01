import React, { Component } from "react";
import Modal from '@material-ui/core/Modal';
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';

export default function WelcomeScreen() {
    let [modalState, changeModalState] = React.useState(false);
  
    return (
      <div>
        <AppBar position="fixed">
          <button type="button" onClick={()=>{changeModalState(true)}}>
            <b>Click this to make your website like this</b>
          </button>
        </AppBar>
        <Modal open={modalState} onClose={()=>{changeModalState(false)}}>
          <Paper>
            <Typography variant="h4" align="center">
                Want to make your website like this?
            </Typography>
            <Typography variant="body1" align="center">
                It's really s1mple. <br/>

                Just append username to the link in addressbar. Then append /submit <br/>
                For example. <b>ORIGINAL_LINK:9090/myusername/submit</b> <br/>
                Fill up the data in JSON format and press submit button at the bottom. <br/>
                Now open original link followed by your username. <br/>
                For example. <b>ORIGINAL_LINK:9090/myusername</b> <br/>
                Share this link with your peers or on LinkedIn/Facebook. <br/>
                
                <b><i>ENJOY!!</i></b>

            </Typography>
          </Paper>
        </Modal>
      </div>
    );
  }