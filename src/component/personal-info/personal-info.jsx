import React, { Component} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import "./personal-info.css";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



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
            <div id="PersonalInfo" className="wrapperDiv">
                <Grid container spacing={16} justify="flex-end" style={{position: "relative", top: "8%", right: "5%"}}>
                    <Grid item>
                        <a href={this.props.personalInfo.linkedIn} target="_blank" ref="noopener"><img id="linkedin-logo" src={this.props.logos.linkedIn} alt="LinkedIn Logo" /></a>
                    </Grid>
                    <Grid item> 
                        <a href={this.props.personalInfo.github} target="_blank" ref="noopener"><img id="github-logo" src={this.props.logos.github} alt="GitHub Logo" /></a>
                    </Grid>           
                </Grid>
                
                <Grid container justify="center" style={{position: "relative", top: "40%"}} direction="column" alignItems="center">
                    <Grid item style={{}}>
                        <Typography variant="h1" color="inherit" align="center" >
                            HEET DAVE
                        </Typography>
                    </Grid>
                    <Grid container justify="center" style={{position: "absolute", top: "350%"}}>
                        <Grid item style={{}}>
                            <Button variant="outlined" color="inherit" onClick={()=>{this.toggleShowBio()}} style={{outline: "none"}}>
                            <Typography variant="button" color="inherit" align="center">
                                Bio
                            </Typography>
                            </Button>
                        </Grid>
                        <Grid item style={{marginTop: "1%"}}>
                            { this.state.showBio && <Typography variant="body1" color="inherit" align="center" style={{position: "relative", width: "80%", left: "10%"}}>
                                        I am currently working as a Software Engineer in Endurance International Group.
                                        Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. 
                                        Boy prosperous increasing surrounded companions her nor advantages sufficient put. 
                                        John on time down give meet help as of. Him waiting and correct believe now cottage she another. 
                                        Vexed six shy yet along learn maids her tiled. Through studied shyness evening bed him winding present. 
                                        excuse hardly on my thirty it wanted.
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