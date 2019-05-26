import React, { Component } from "react";
import {hot} from "react-hot-loader";
import Experiences from "../experiences/experiences";
import PersonalInfo from "../personal-info/personal-info";
import Projects from "../projects/projects";
import Education from "../education/education";
import Extracurricular from "../extracurricular/extracurricular";
import SubmitWebsiteData from "../submit-website-data//submit-website-data";
import Electives from "../electives/electives";
import Skills from "../skills/skills";
import  Logos from "../logos/logos";
import { store } from "../../store";
import { actionType, actions } from "./ducks";
import { HashRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./main-component.css";

class MainComponent extends Component{

  // componentWillMount()
  // {
  //     store.dispatch({type: actionType.SET_USERNAME, payload: {username: this.props.match.params.username}});
  // }

  componentDidMount()
  {
    this.props.getUserWebsiteData({username: this.props.match.params.username})
    // store.dispatch({type: actionType.GET_USER_WEBSITE_DATA});
  }

  render(){
    return(
      <div className="MainComponent">
        <PersonalInfo/>
        <Logos/>
        {/* <Electives/> */}
        {/* <div className="sectionDivider"/> */}
        <Experiences/>
        {/* <div className="sectionDivider"/> */}
        <Education/>
        {/* <div className="sectionDivider"/> */}
        {/* <div className="ProjectsSkillsWrapper"> */}
          <Projects/>
          <Skills/>
        {/* </div> */}
        {/* <div className="sectionDivider"/> */}
        <Extracurricular/>
      </div>
    );
  }
}

let MainComponentWithConnect = connect(null, actions)(MainComponent);


class Root extends Component{
  render(){
    return (
      <div>
        <Route exact path="/:username" component={MainComponentWithConnect} />
        <Route exact path="/:username/submit" component={SubmitWebsiteData} />
      </div>
    );
  }
}



export default hot(module)(Root);