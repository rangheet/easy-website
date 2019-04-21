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
import { HashRouter, Route } from "react-router-dom";
import "./main-component.css";

class MainComponent extends Component{
  render(){

    console.log("USERBNAME", this.props.match.params.username);

    return(
      <div className="MainComponent">
        <PersonalInfo/>
        <Logos/>
        <Electives/>
        <div className="sectionDivider"/>
        <Experiences/>
        <div className="sectionDivider"/>
        <Education/>
        <div className="sectionDivider"/>
        <div className="ProjectsSkillsWrapper">
          <Projects/>
          <Skills/>
        </div>
        <div className="sectionDivider"/>
        <Extracurricular/>
      </div>
    );
  }
}

class Root extends Component{
  render(){
    return (
      <div>
        <Route exact path="/:username" component={MainComponent} />
      </div>
    );
  }
}

export default hot(module)(Root);