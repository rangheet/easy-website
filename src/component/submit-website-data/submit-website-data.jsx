import React, { Component, Fragment, useEffect, useState } from "react";
import { actions } from "./ducks";
import { actions as mainComponentActions} from "../main-component/ducks"
import { connect } from "react-redux";
import { Grid, Typography, Button, Paper, TextField} from '@material-ui/core';
import "./submit-website-data.css";




function SubmitWebsiteData(props) {


    let initialState = {
        personalInfo: '{"bio": "", "name": "", "resume": "", "company": "", "occupation": "", "dateOfBirth": "", "profileImage": ""}',
        experiences: '[{ "endTime": "", "location": "", "position": "", "startTime": "", "mentorName": "", "companyLogo": { "url": "", "logoname": "", "filenameOnServer": "" }, "companyName": "", "technologies": [ "" ], "mentorContact": "", "workDescription": [ "" ]}]',
        education: '[{ "cgpa": 0, "city": "", "state": "", "degree": "", "country": "", "endYear": 0, "electives": [ { "name": "", "institute": "", "courseCode": "" } ], "startYear": 0, "instituteAbbr": "", "instituteLogo": { "url": "", "logoname": "", "filenameOnServer": "" }, "instituteName": "" } ]',
        skills: '[{ "name": "", "category": "", "ratingOutOf10": 0 } ]',
        projects: '[{ "title": "", "company": "", "projectType": "", "technologies": [ "" ], "projectDescription": [ "" ] } ]',
        logos: '{"Email": { "url": "mailto:", "logoname": "Email", "filenameOnServer": "email-icon.png" }, "Github": { "url": "", "logoname": "Github", "filenameOnServer": "github-logo-white.png" }, "LinkedIn": { "url": "", "logoname": "LinkedIn", "filenameOnServer": "linkedin-logo-white.svg" } }',
        extracurricular: '[{ "state": "", "country": "", "position": "", "organization": "", "timeOfActivity": "", "workDescription": "" } ]'
    };

    let [state, updateState]  =  useState(
        initialState
    );

    useEffect(() => {
        props.getUserWebsiteData({username: props.match.params.username});
    }, []);
    

    useEffect(() => {
        // console.log("props Updated", props, JSON.stringify(props.experiences));
        
        updateState({
            personalInfo: props.personalInfo ? JSON.stringify(props.personalInfo) : initialState.personalInfo,
            education: props.education ? JSON.stringify(props.education) : initialState.education,
            experiences: props.experiences ? JSON.stringify(props.experiences) : initialState.experiences,
            logos: props.logos ? JSON.stringify(props.logos) : initialState.logos,
            projects: props.projects ? JSON.stringify(props.projects) : initialState.projects,
            skills: props.skills ? JSON.stringify(props.skills) : initialState.skills,
            extracurricular: props.extracurricular ? JSON.stringify(props.extracurricular) : initialState.extracurricular
        });
    }, [props]);

    // constructor(props)
    // {
    //     super(props);
    //     console.log("CONSOLE PROPS", props);
    //     state = {
    //         personalInfo: '{"bio": "", "name": "", "resume": "", "company": "", "occupation": "", "dateOfBirth": "", "profileImage": ""}',
    //         experiences: '[{ "endTime": "", "location": "", "position": "", "startTime": "", "mentorName": "", "companyLogo": { "url": "", "logoname": "", "filenameOnServer": "" }, "companyName": "", "technologies": [ "" ], "mentorContact": "", "workDescription": [ "" ]}]',
    //         education: '[{ "cgpa": 0, "city": "", "state": "", "degree": "", "country": "", "endYear": 0, "electives": [ { "name": "", "institute": "", "courseCode": "" } ], "startYear": 0, "instituteAbbr": "", "instituteLogo": { "url": "", "logoname": "", "filenameOnServer": "" }, "instituteName": "" } ]',
    //         skills: '[{ "name": "", "category": "", "ratingOutOf10": 0 } ]',
    //         projects: '[{ "title": "", "company": "", "projectType": "", "technologies": [ "" ], "projectDescription": [ "" ] } ]',
    //         logos: '{"Email": { "url": "mailto:", "logoname": "Email", "filenameOnServer": "email-icon.png" }, "Github": { "url": "", "logoname": "Github", "filenameOnServer": "github-logo-white.png" }, "LinkedIn": { "url": "", "logoname": "LinkedIn", "filenameOnServer": "linkedin-logo-white.svg" } }',
    //         extracurricular: '[{ "state": "", "country": "", "position": "", "organization": "", "timeOfActivity": "", "workDescription": "" } ]'
    //     };
    //     handleChange =  handleChange.bind(this);
    // }

    // componentDidMount()
    // {
    //     props.getUserWebsiteData({username: props.match.params.username})
    // }

    function handleChange(event)
    {
        updateState({
            ...state,
            [event.target.id]: event.target.value
        });
    }

    // render()
    // {

        // console.log("STATE", props, state);
        return (
            <Fragment>

                <Grid container direction="column" spacing={32}>
                    <Grid item>
                        <Paper className="Paper">
                            <TextField
                            id="personalInfo"
                            label="Personal Info"
                            multiline
                            rows="4"
                            rowsMax= "16"
                            margin="normal"
                            fullWidth
                            value = {state.personalInfo}
                            onChange = {handleChange}
                            required
                            key = {props.personalInfo}
                            />
                        </Paper>
                    </Grid>
                    <Grid item >
                        <Paper className="Paper">
                            <TextField
                            id="experiences"
                            label="Experiences"
                            multiline
                            rows="4"
                            rowsMax= "16"
                            margin="normal"
                            fullWidth
                            value = {state.experiences}
                            onChange = {handleChange}
                            required
                            key = {props.experiences}
                            />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className="Paper">
                            <TextField
                            id="education"
                            label="Education"
                            multiline
                            rows="4"
                            rowsMax= "16"
                            margin="normal"
                            fullWidth
                            value = {state.education}
                            onChange = {handleChange}
                            required
                            />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className="Paper">
                            <TextField
                            id="projects"
                            label="Projects"
                            multiline
                            rows="4"
                            rowsMax= "16"
                            margin="normal"
                            fullWidth
                            value = {state.projects}
                            onChange = {handleChange}
                            required
                            />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className="Paper">
                            <TextField
                            id="skills"
                            label="Skills"
                            multiline
                            rows="4"
                            rowsMax= "16"
                            margin="normal"
                            fullWidth
                            value = {state.skills}
                            onChange = {handleChange}
                            required
                            />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className="Paper">
                            <TextField
                            id="logos"
                            label="Logos"
                            multiline
                            rows="4"
                            rowsMax= "16"
                            margin="normal"
                            fullWidth
                            value = {state.logos}
                            onChange = {handleChange}
                            required
                            />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className="Paper">
                            <TextField
                            id="extracurricular"
                            label="Extracurricular"
                            multiline
                            rows="4"
                            rowsMax= "16"
                            margin="normal"
                            fullWidth
                            value = {state.extracurricular}
                            onChange = {handleChange}
                            required
                            />
                        </Paper>
                    </Grid>
                </Grid>
                
                <Button color="primary" variant="contained" onClick = {() => {
                    console.log("Submitted Data", state);
                    props.submitWebsiteData({...state, username: props.match.params.username});
                }} style={{marginTop: "5%", marginLeft: "1%"}}>
                    Submit
                </Button>
            </Fragment>
        );
    //}

}

export default connect((state) => state , {...actions, ...mainComponentActions})(SubmitWebsiteData);