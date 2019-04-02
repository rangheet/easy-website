import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Experiences from "./component/experiences/experiences";
import PersonalInfo from "./component/personal-info/personal-info";
import Projects from "./component/projects/projects";
import Education from "./component/education/education";
import Extracurricular from "./component/extracurricular/extracurricular";
import Electives from "./component/electives/electives";
import Skills from "./component/skills/skills";
import  Logos from "./component/logos/logos";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./main-component.css";

class MainComponent extends Component{
  render(){
    return(
      <div className="MainComponent">
        <Logos/>
        <Electives/>
        <PersonalInfo/>
        <div style={{height:"1px", background: "white", width:"100%"}}/>
        <Experiences/>
        <div style={{height:"1px", background: "white", width:"100%"}}/>
        <Education/>
        <div style={{height:"1px", background: "white", width:"100%"}}/>
        <div className="ProjectsSkillsWrapper">
          <Projects/>
          <Skills/>
        </div>
        <div style={{height:"1px", background: "white", width:"100%"}}/>
        <Extracurricular/>
      </div>
    );
  }
}

export default hot(module)(MainComponent);