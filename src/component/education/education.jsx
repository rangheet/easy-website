import React, { Component, Fragment} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import { map, filter } from "lodash";
import {Paper, Typography, Grid, Chip} from "@material-ui/core";
import "./education.css";
import "../../main-component.css";
import { config } from "../../config";
class Education extends Component{

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this.props.getEducation();
    }

    render()
    {
        let education=this.props.education.education;
        return (
            <div className="educationWrapper">
                    <Typography variant="h4" color="inherit" align="left">
                        Education:
                    </Typography>
                    {map(education,(institute,index) => <Paper key={index} square className="commonPaper">
                                                            <Grid container direction="row">
                                                                <Grid item lg={2} md={2} xs={12} /*className="pictureContainer"*/>
                                                                    <Grid container direction="row">
                                                                        <Grid item>
                                                                            <a href={institute.instituteLogo.url} target="_blank" ref="noopener"><img id={`${institute.instituteLogo.logoname}-logo`} className="logo-div" src= {institute.instituteLogo.filenameOnServer ? config.BackendEndpoint+institute.instituteLogo.filenameOnServer : undefined} alt={institute.instituteLogo.logoname}/></a>
                                                                        </Grid>
                                                                        <Grid item>
                                                                            <div className="pictureDivider"/>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Grid>
                                                                {/* <Grid item>
                                                                </Grid> */}
                                                                <Grid item lg={8} md={10} xs={12}>
                                                                    <Typography variant="h5" color="inherit" align="left">
                                                                        {institute.instituteName}
                                                                        <a href={institute.instituteLogo.url} target="_blank" ref="noopener" className="linkIcon"><i className="material-icons">link</i></a>
                                                                    </Typography>
                                                                    <Typography variant="subtitle1" color="inherit">
                                                                        B.Tech in Information and Communication Technology (ICT)
                                                                    </Typography>
                                                                    <Typography variant="button" color="inherit" align="left">
                                                                        CGPA: {institute.cgpa}
                                                                    </Typography>
                                                                        Coursework:
                                                                        <Grid container direction="row" >
                                                                        {      
                                                                            map(filter(this.props.electives, (elective) => elective.institute===elective.instituteAbbr)[0], 
                                                                            filteredElective => <Grid item key={filteredElective.courseCode}><Chip label={`${filteredElective.name}`} className="commonChip"/></Grid>)
                                                                        }
                                                                        </Grid>
                                                                </Grid>    
                                                                <Grid item lg={2} md={2} xs={12} /*className="educationLocationTime"*/>
                                                                        <Grid container direction="column">
                                                                            <Grid item className="educationStartEndTime">
                                                                                <Typography variant="subtitle1" color="inherit" align="left">
                                                                                    {institute.startYear}-{institute.endYear} <br/>                                                                               
                                                                                </Typography>
                                                                            </Grid>
                                                                            <Grid item>
                                                                                <Grid container direction="row">
                                                                                    <Grid item>
                                                                                        <i className="material-icons">location_on</i>
                                                                                    </Grid>
                                                                                    <Grid item>
                                                                                        <Typography variant="subtitle1" color="inherit" align="left">
                                                                                            {institute.state}, {institute.country}
                                                                                        </Typography>
                                                                                    </Grid>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </Grid> 
                                                                </Grid>                                          
                                                            </Grid>
                                                        </Paper>)}
                                                    
            </div>
        );
    } 

}

function mapStateToProps(state)
{
    return { education: state.education,
             electives: state.electives
    }; 
}

function mapDispatchToProps(dispatch)
{
    return {  getEducation: () => dispatch(actions.getEducation()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Education);