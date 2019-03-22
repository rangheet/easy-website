import React, { Component, Fragment} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import { map } from "lodash";
import {Tabs,Tab,Paper,Grid,Chip,Typography} from '@material-ui/core';

import "./projects.css";

let tab = Object.freeze({"Academic":0, "Personal":1});
class Projects extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            projectTab: tab.Academic
        };
        this.switchTab=this.switchTab.bind(this);
    }


    componentDidMount()
    {
        this.props.getProjects();
    }

    switchTab(event, value){
        this.setState({projectTab: value});
    }

    render()
    {
        let projects=this.props.projects.allProjects;
        let displayProjects=[]
        if(this.state.projectTab===tab.Academic)
            displayProjects = this.props.projects.academicProjects;
        else    
            displayProjects = this.props.projects.personalProjects;

        return (
            <div className="projectsWrapperDiv">
                <div style={{ position: "relative", top:"3%", left: "1%"}}>
                <Typography variant="h4" color="inherit" align="left" style={{position: "static", color: "#eeeeee", marginTop:"20px"}}>
                            Projects:
                </Typography>

                <Tabs value={this.state.projectTab} onChange={this.switchTab} indicatorColor="primary" >
                    <Tab label="Academic" style={{outline: "none"}}/>
                    <Tab label="Personal" style={{outline: "none"}}/>
                </Tabs>
                    
                
                {map(displayProjects,(project,index) => 
                    <Fragment key={index.toString()}> 
                        <Paper square elevation={0} style={{position: "relative", padding: "8px" ,marginTop: 16, marginBottom: 16, marginLeft: 4, marginRight: 2, width: "98%", left: "0%", border:"4px white solid", background: "black"}}>
                            <Typography variant="h5" color="inherit" align="left">
                                {project.title}
                            </Typography>
                            <Grid container direction="row">
                                {this.state.projectTab===tab.Academic && <Grid item>
                                    <i className="material-icons">school</i>
                                </Grid>}
                                <Grid item>
                                    <Typography variant="subtitle1" color="inherit" align="left" style={{marginLeft: "5px"}}>
                                        {project.company}
                                    </Typography>
                                </Grid>
                            </Grid>        
                            <Typography variant="body1" color="inherit" align="left">
                                Description: {project.projectDescription}
                            </Typography>
                            <Grid container direction="row">
                                {map(project.technologies,(technology, index) => 
                                    <Grid item key={index}>
                                        <Chip label={technology} style={{border: "2px solid white", background: "transparent", marginRight: "5px"}} color="primary"/>                                                                
                                    </Grid>
                                )}
                            </Grid>
                        </Paper>
                    </Fragment>)}
                </div>
            </div>
        );
    } 

}

function mapStateToProps(state)
{
    return { projects: state.projects }; 
}

function mapDispatchToProps(dispatch)
{
    return {  getProjects: () => dispatch(actions.getProjects()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);