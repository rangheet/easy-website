import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Experiences from "./component/experiences/experiences";
import PersonalInfo from "./component/personal-info/personal-info";
import Projects from "./component/projects/projects";
import Education from "./component/education/education";
import Extracurricular from "./component/extracurricular/extracurricular";
import Electives from "./component/electives/electives";
import Skills from "./component/skills/skills";


import "./main-component.css";

class MainComponent extends Component{
  render(){
    return(
      <div className="MainComponent">
        <h1> Hello, Sherlock!</h1>
        <PersonalInfo/>
        <Experiences/>
        <Projects/>
        <Education/>
        <Extracurricular/>
        <Electives/>
        <Skills/>
      </div>
    );
  }
}

export default hot(module)(MainComponent);