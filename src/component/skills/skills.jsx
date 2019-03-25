import React, { Component, Fragment} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import { map } from "lodash";
import { LinearProgress, Tabs, Tab } from "@material-ui/core";
import "./skills.css";

const tabs = Object.freeze({Language: 0, WebTech: 1, PM: 2});

class Skills extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            skillTabs: tabs.Language
        };
        this.handleChange=this.handleChange.bind(this);    
    }

    componentDidMount()
    {
        this.props.getSkills();
    }

    handleChange(event, value)
    {
        this.setState({skillTabs: value});
    }

    render()
    {
        let skills=null;

        if(this.state.skillTabs==tabs.Language)
        {
            skills=this.props.skills.languageSkills;
        }
        else if(this.state.skillTabs==tabs.WebTech)
        {
            skills=this.props.skills.webTechSkills;
        }
        else
        {
            skills=this.props.skills.PMSkills;
        }

        return (
            <div className="skillsWrapper">
                <div style={{position: "relative", top: "3%", left: "1.5vh"}}>
                    <h2>Skills: </h2>

                    <Tabs value={this.state.skillTabs} onChange={this.handleChange}>
                        <Tab label="Languages" style={{outline: "none"}}/>
                        <Tab label="Web Technologies" style={{outline: "none"}}/>
                        <Tab label="Project Managament Tools" style={{outline: "none"}}/>
                    </Tabs>
                    <div style={{position: "relative", padding: "10px", paddingBottom: "25px" ,marginTop: 16, marginBottom: 16, marginLeft: 4, marginRight: 2, width: "50%", left: "0%", border:"4px white solid", background: "black"}}>
                       {map(skills,(skill,index) => <Fragment key={index.toString()}> 
                                                            {skill.name}
                                                            <LinearProgress variant="determinate" value={skill.ratingOutOf10 * 10}></LinearProgress>
                                                    </Fragment>)}
                    </div>

                </div>
            </div>
        );
    } 

}

function mapStateToProps(state)
{
    return { skills: state.skills }; 
}

function mapDispatchToProps(dispatch)
{
    return {  getSkills: () => dispatch(actions.getSkills()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills);