import React, { Component, Fragment } from "react";
import { actions } from "./ducks";
import { actions as mainComponentActions} from "../main-component/ducks"
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
            education: '[{ "cgpa": 0, "city": "", "state": "", "degree": "", "country": "", "endYear": 0, "electives": [ { "name": "", "institute": "", "courseCode": "" } ], "startYear": 0, "instituteAbbr": "", "instituteLogo": { "url": "", "logoname": "", "filenameOnServer": "" }, "instituteName": "" } ]',
            skills: '[{ "name": "", "category": "", "ratingOutOf10": 0 } ]',
            projects: '[{ "title": "", "company": "", "projectType": "", "technologies": [ "" ], "projectDescription": [ "" ] } ]',
            logos: '{"Email": { "url": "mailto:", "logoname": "Email", "filenameOnServer": "email-icon.png" }, "Github": { "url": "", "logoname": "Github", "filenameOnServer": "github-logo-white.png" }, "LinkedIn": { "url": "", "logoname": "LinkedIn", "filenameOnServer": "linkedin-logo-white.svg" } }',
            extracurricular: '[{ "state": "", "country": "", "position": "", "organization": "", "timeOfActivity": "", "workDescription": "" } ]'
        };
        this.handleChange =  this.handleChange.bind(this);
    }

    componentDidMount()
    {
        this.props.getUserWebsiteData({username: this.props.match.params.username})
    }

    handleChange(event)
    {
        this.setState({[event.target.id]: event.target.value});
    }

    render()
    {
        // console.log("STATE", this.props, this.props.experiences !== null ?  JSON.stringify(this.props.experiences) : this.state.experiences);
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
                            value = {this.props.personalInfo ?  JSON.stringify(this.props.personalInfo) : this.state.personalInfo}
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
                            value = {this.props.experiences ?  JSON.stringify(this.props.experiences) : this.state.experiences}
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
                            value = {this.props.education ?  JSON.stringify(this.props.education) : this.state.education}
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
                            value = {this.props.projects ?  JSON.stringify(this.props.projects) : this.state.projects}
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
                            value = {this.props.skills ?  JSON.stringify(this.props.skills) : this.state.skills}
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
                            value = {this.props.logos ?  JSON.stringify(this.props.logos) : this.state.logos}
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
                            value = {this.props.extracurricular ?  JSON.stringify(this.props.extracurricular) : this.state.extracurricular}
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

export default connect((state) => state , {...actions, ...mainComponentActions})(SubmitWebsiteData);