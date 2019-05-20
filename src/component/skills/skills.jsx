import React, { Component, Fragment} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import { LinearProgress, Tabs, Tab, Typography } from "@material-ui/core";
import "./skills.css";

const tabs = ["languageSkills", "webTechSkills", "PMSkills", "DevOpsTools"];

class Skills extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            skillTabs: 0
        };
        this.handleChange=this.handleChange.bind(this);    
    }

    // componentDidMount()
    // {
    //     // this.props.getSkills();
    // }

    handleChange(event, value)
    {
        this.setState({skillTabs: value});
    }

    render()
    {
        return (
            <div className="skillsWrapper">
                    <Typography variant="h4" color="inherit">
                        Skills:
                    </Typography>

                    <Tabs value={this.state.skillTabs} onChange={this.handleChange}>
                        <Tab label="Languages" style={{outline: "none"}}/>
                        <Tab label="Web Technologies" style={{outline: "none"}}/>
                        <Tab label="Project Managament" style={{outline: "none"}}/>
                        <Tab label="DevOps Tools" style={{outline: "none"}}/>
                    </Tabs>
                    <div className="skillsBarOuterDiv">
                       {this.props.skills[tabs[this.state.skillTabs]].map((skill,index) => <div key={index.toString()} className="skillBar"> 
                                                            {skill.name}
                                                            <LinearProgress variant="determinate" value={skill.ratingOutOf10 * 10} className="linearProgressBar" />
                                                    </div>)}
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