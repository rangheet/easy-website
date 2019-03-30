import React, { Component, Fragment} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import { map, filter } from "lodash";
import {Paper, Typography, Grid, Chip} from "@material-ui/core";
import "./education.css";
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
                <div style={{ position: "relative", top:"3vh", left: "1%", paddingBottom: 16}}>
                    <Typography variant="h4" color="inherit" align="left" style={{position: "static", color: "#eeeeee"}}>
                        Education:
                    </Typography>
                    {map(education,(institute,index) => <Paper key={index} square elevation={0} style={{position: "relative", padding: "8px" ,marginTop: 16, marginBottom: 0, marginLeft: 4, marginRight: 2, width: "98%", left: "0%", border:"4px white solid", background: "black"}}>
                                                            <Grid container direction="row">
                                                                <Grid item style={{maxWidth: "100%", maxHeight: "100%", marginRight: 15}}>
                                                                    <a href={institute.instituteLogo.url} target="_blank" ref="noopener"><img id={`${institute.instituteLogo.logoname}-logo`} className="logo-div" src= {institute.instituteLogo.filenameOnServer ? config.BackendEndpoint+institute.instituteLogo.filenameOnServer : undefined} alt={institute.instituteLogo.logoname}/></a>
                                                                </Grid>
                                                                <Grid item>
                                                                    <div style={{width:"1px", background: "white", height:"50%", marginRight: 15, position: "relative", top: "25%"}}/>
                                                                </Grid>
                                                                <Grid item>
                                                                    <Typography variant="h5" color="inherit" align="left">
                                                                        {institute.instituteName}
                                                                        <a href={institute.instituteLogo.url} target="_blank" ref="noopener" style={{position:"absolute", top:"5%"}}><i className="material-icons">link</i></a>
                                                                    </Typography>
                                                                    <Grid item>
                                                                        <div style={{position:"absolute", right:5, top: 10}}>            
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
                                                                            <Grid item style={{position:"absolute", left: 7}}>
                                                                                    <Typography variant="subtitle1" color="inherit" align="left">
                                                                                        {institute.startYear}-{institute.endYear} <br/>                                                                               
                                                                                    </Typography>
                                                                            </Grid>
                                                                        </div>
                                                                    </Grid>
                                                                    
                                                                    <Typography variant="button" color="inherit" align="left" style={{position: "relative",  top: 8}}>
                                                                        CGPA: {institute.cgpa}
                                                                    </Typography>
                                                                    <Grid container direction="row" style={{position: "absolute",  bottom: 30}}>
                                                                        <Grid item style={{position:"relative", top: "4px"}}>
                                                                                Coursework:
                                                                        </Grid>
                                                                        <Grid item>
                                                                        {
                                                                            <div style={{width: "1000px", display: "flex", flexWrap: "wrap"}}>
                                                                            {
                                                                                map(filter(this.props.electives, (elective) => elective.institute===elective.instituteAbbr)[0], 
                                                                                filteredElective => <Chip key={filteredElective.courseCode} label={`${filteredElective.name}`} style={{border: "2px solid white", background: "transparent", margin: "3px"}} color="primary"/>)
                                                                            }
                                                                            </div>
                                                                        }
                                                                        </Grid>
                                                                    </Grid>
                                                                    
                                                                    
                                                                </Grid>                                              
                                                            </Grid>
                                                        </Paper>)}
                                                    
                </div>
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