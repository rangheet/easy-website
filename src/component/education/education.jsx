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
                                                                <Grid item className="pictureContainer">
                                                                    <a href={institute.instituteLogo.url} target="_blank" ref="noopener"><img id={`${institute.instituteLogo.logoname}-logo`} className="logo-div" src= {institute.instituteLogo.filenameOnServer ? config.BackendEndpoint+institute.instituteLogo.filenameOnServer : undefined} alt={institute.instituteLogo.logoname}/></a>
                                                                </Grid>
                                                                <Grid item>
                                                                    <div className="pictureDivider"/>
                                                                </Grid>
                                                                <Grid item>
                                                                    <Typography variant="h5" color="inherit" align="left">
                                                                        {institute.instituteName}
                                                                        <a href={institute.instituteLogo.url} target="_blank" ref="noopener" className="linkIcon"><i className="material-icons">link</i></a>
                                                                    </Typography>
                                                                    <Grid item className="educationLocationTime">
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
                                                                    
                                                                    <Typography variant="button" color="inherit" align="left">
                                                                        CGPA: {institute.cgpa}
                                                                    </Typography>
                                                                    <Grid container direction="row">
                                                                        <Grid item >
                                                                                Coursework:
                                                                        </Grid>
                                                                        <Grid item >
                                                                        {
                                                                            <div style={{width: "1000px", display: "flex", flexWrap: "wrap"}}>
                                                                            {
                                                                                map(filter(this.props.electives, (elective) => elective.institute===elective.instituteAbbr)[0], 
                                                                                filteredElective => <Chip key={filteredElective.courseCode} label={`${filteredElective.name}`} className="coursesChip"/>)
                                                                            }
                                                                            </div>
                                                                        }
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