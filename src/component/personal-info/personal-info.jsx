import React, { Component} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import "./personal-info.css";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { config } from "../../config";
import { Paper } from "@material-ui/core";



const styles = {
};

class PersonalInfo extends Component{
    
    constructor(props)
    {
        super(props);
        this.state= {
            showBio: false
        };
        this.toggleShowBio=this.toggleShowBio.bind(this);
    }

    componentDidMount()
    {
        this.props.getPersonalInfo();
    }

    render()
    {
        return (
            <div id="PersonalInfo" className="wrapperDiv" href="#PersonalInfo">
                <Grid container spacing={16} justify="flex-end" style={{position: "relative", top: "8%", right: "5%"}}>
                    <Grid item>                                                                                     
                        <a href={this.props.logos.LinkedIn.url} target="_blank" ref="noopener"><img id="linkedin-logo" src={this.props.logos.LinkedIn.filenameOnServer ? config.BackendEndpoint+this.props.logos.LinkedIn.filenameOnServer : undefined} alt={this.props.logos.LinkedIn.logoname} /></a>
                    </Grid>
                    <Grid item> 
                        <a href={this.props.logos.Github.url} target="_blank" ref="noopener"><img id="github-logo" src={this.props.logos.Github.filenameOnServer ? config.BackendEndpoint+this.props.logos.Github.filenameOnServer : undefined} alt={this.props.logos.Github.logoname} /></a>
                    </Grid>       
                    <Grid item> 
                        <a href={this.props.logos.Email.url}><img id="email-logo" src={this.props.logos.Email.filenameOnServer ? config.BackendEndpoint+this.props.logos.Email.filenameOnServer : undefined} alt={this.props.logos.Email.logoname} /></a>
                    </Grid>           
                </Grid>
                
                <Grid container justify="center" style={{position: "relative", top: "35%"}} direction="column" alignItems="center">
                    <Grid item style={{}}>
                        <Typography variant="h3" color="inherit" align="center" className="line-1 anim-typewriter">
                                Welcome to Sherlock's 221B
                        </Typography>
                        {/* <Typography variant="h1" color="inherit" align="center" >
                            {this.props.personalInfo.name.toUpperCase()}
                        </Typography> */}
                    </Grid>
                    <Grid container justify="center" style={{position: "absolute", top: "30vh"}}>
                        <Grid item style={{marginRight:16}}>
                            <Button id="bio-button" variant="outlined" color="inherit" onClick={()=>{this.toggleShowBio()}} style={{outline: "none"}}>
                                <Typography variant="button" color="inherit" align="center">
                                    Bio
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="inherit" href={config.BackendEndpoint + this.props.personalInfo.resume} target="_blank" ref="noopener" style={{outline: "none"}}>
                                <Typography variant="button" color="inherit" align="center">
                                    Resume
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item style={{marginTop: "5vh"}}>
                            { this.state.showBio && <Typography variant="body1" color="inherit" align="center" style={{position: "relative", width: "80%", left: "10%"}}>
                                {this.props.personalInfo.bio}
                            </Typography>
                            }
                        </Grid>
                    </Grid>                                           
                </Grid>
                
                {/* <img id="profile-image" src={this.props.personalInfo.profileImage} alt="Profile Image" ></img>  <br/> */}
                {/* Name: {this.props.personalInfo.name} <br/> */}
                {/* Occupation: {this.props.personalInfo.occupation} <br/> */}
                {/* Company: {this.props.personalInfo.company} <br/> */}
                {/* Date of Birth: {formatDate(this.props.personalInfo.dateOfBirth)} <br/> */}
                {/* <img id="github-logo" src="http://localhost:9000/github-logo-white.png" alt="GitHub Logo" /> */}
                {/* <a href={this.props.personalInfo.linkedIn} target="_blank" ref="noopener">BIO</a> */}

            </div>
        );
    }

    toggleShowBio(){
        this.setState({showBio: !this.state.showBio});
    }
    
}

function mapStateToProps(state)
{
    return { 
        personalInfo: state.personalInfo,
        logos: state.logos     
    };
}

function mapDispatchToProps(dispatch)
{
    return { getPersonalInfo: () => dispatch(actions.getPersonalInfoAction()) };
}

const PersonalInfoClass = connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);

export default PersonalInfoClass;