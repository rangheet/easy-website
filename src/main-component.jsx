import React, { Component} from "react";
import {hot} from "react-hot-loader";

class MainComponent extends Component{
  render(){
    return(
      <div className="MainComponent">
        <h1> Hello, Sherlock!</h1>
      </div>
    );
  }
}

export default hot(module)(MainComponent);