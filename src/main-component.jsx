import React, { Component} from "react";
import {hot} from "react-hot-loader";
import ExperiencesComponent from "./component/experiences/experiences.jsx";

class MainComponent extends Component{
  render(){
    return(
      <div className="MainComponent">
        <h1> Hello, Sherlock!</h1>
        <ExperiencesComponent/>
      </div>
    );
  }
}

export default hot(module)(MainComponent);