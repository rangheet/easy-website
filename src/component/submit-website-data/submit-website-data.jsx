import React, { Component, Fragment } from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import { Grid, Typography, Button, Paper, TextField} from '@material-ui/core';
import "./submit-website-data.css";

class SubmitWebsiteData extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            personalInfo: '{"bio": "", "name": "", "resume": "", "company": "", "occupation": "", "dateOfBirth": "", "profileImage": ""}',
            experiences: '[{ "endTime": "", "location": "", "position": "", "startTime": "", "mentorName": "", "companyLogo": { "url": "", "logoname": "", "filenameOnServer": "" }, "companyName": "", "technologies": [ "" ], "mentorContact": "", "workDescription": [ "" ]}]',
            education: '[ { "cgpa": 0, "city": "", "state": "", "degree": "", "country": "", "endYear": 0, "electives": [ { "name": "", "institute": "", "courseCode": "" } ], "startYear": 0, "instituteAbbr": "", "instituteLogo": { "url": "", "logoname": "", "filenameOnServer": "" }, "instituteName": "" } ]',
            skills: '[ { "name": "", "category": "", "ratingOutOf10": 0 } ]',
            projects: '[ { "title": "", "company": "", "projectType": "", "technologies": [ "" ], "projectDescription": [ "" ] } ]',
            logos: '{ "Email": { "url": "mailto:", "logoname": "Email", "filenameOnServer": "email-icon.png" }, "Github": { "url": "", "logoname": "Github", "filenameOnServer": "github-logo-white.png" }, "LinkedIn": { "url": "", "logoname": "LinkedIn", "filenameOnServer": "linkedin-logo-white.svg" } }',
            extracurricular: '[ { "state": "", "country": "", "position": "", "organization": "", "timeOfActivity": "", "workDescription": "" } ]'
        };
        this.handleChange =  this.handleChange.bind(this);
    }

    handleChange(event)
    {
        this.setState({[event.target.id]: event.target.value});
    }

    render()
    {
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
                            defaultValue = '{"bio": "", "name": "", "resume": "", "company": "", "occupation": "", "dateOfBirth": "", "profileImage": ""}'
                            onChange = {this.handleChange}
                            required
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
                            defaultValue = '[{ "endTime": "", "location": "", "position": "", "startTime": "", "mentorName": "", "companyLogo": { "url": "", "logoname": "", "filenameOnServer": "" }, "companyName": "", "technologies": [ "" ], "mentorContact": "", "workDescription": [ "" ]}]'
                            onChange = {this.handleChange}
                            required
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
                            defaultValue = '[{ "cgpa": 0, "city": "", "state": "", "degree": "", "country": "", "endYear": 0, "electives": [ { "name": "", "institute": "", "courseCode": "" } ], "startYear": 0, "instituteAbbr": "", "instituteLogo": { "url": "", "logoname": "", "filenameOnServer": "" }, "instituteName": "" } ]'
                            onChange = {this.handleChange}
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
                            defaultValue = '[ { "title": "", "company": "", "projectType": "", "technologies": [ "" ], "projectDescription": [ "" ] } ]'
                            onChange = {this.handleChange}
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
                            defaultValue = '[ { "name": "", "category": "", "ratingOutOf10": 0 } ]'
                            onChange = {this.handleChange}
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
                            defaultValue = '{ "Email": { "url": "mailto:", "logoname": "Email", "filenameOnServer": "email-icon.png" }, "Github": { "url": "", "logoname": "Github", "filenameOnServer": "github-logo-white.png" }, "LinkedIn": { "url": "", "logoname": "LinkedIn", "filenameOnServer": "linkedin-logo-white.svg" } }'
                            onChange = {this.handleChange}
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
                            defaultValue = '[ { "state": "", "country": "", "position": "", "organization": "", "timeOfActivity": "", "workDescription": "" } ]'
                            onChange = {this.handleChange}
                            required
                            />
                        </Paper>
                    </Grid>
                </Grid>
                
                <Button color="primary" variant="contained" onClick = {() => {
                    console.log("REFS", this.state);
                    this.props.submitWebsiteData({...this.state, username: this.props.match.params.username});
                }} style={{marginTop: "5%", marginLeft: "1%"}}>
                    Submit
                </Button>
            </Fragment>
        );
    }

}

export default connect(null, actions)(SubmitWebsiteData);