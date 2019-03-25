import React, { Component, Fragment} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import { map } from "lodash";
import {Paper, Typography, Grid} from "@material-ui/core";
import "./extracurricular.css";

class Extracurricular extends Component{

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this.props.getExtracurricular();
    }

    render()
    {
        let extracurricular=this.props.extracurricular.extracurricular;
        return (
            <div className="extracurricularWrapperDiv">
                <div style={{ position: "relative", top:"3vh", left: "1%"}}>
                    <Typography variant="h4" color="inherit" align="left" style={{position: "relative", color: "#eeeeee"}}>
                        Extracurriculars:
                    </Typography>
                    {map(extracurricular,(activity,index) =><Paper square elevation={0} key={index} style={{position: "relative", padding: "8px" ,marginTop: 16, marginBottom: 0, marginLeft: 4, marginRight: 2, width: "98%", left: "0%", border:"4px white solid", background: "black"}}>

                                <Typography variant="h5" color="inherit" align="left">
                                    {activity.organization}
                                </Typography>                                                                
                                <Grid item>
                                    <div style={{position:"relative", right:0, top: "10%", marginRight:5}}>   
                                        <Grid container direction="row">
                                            <Grid item>
                                                <i className="material-icons">person</i>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit" align="left">
                                                    {activity.position}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid item>
                                    <div style={{position:"relative", right:0, top: "10%", marginRight:5}}>   
                                        <Grid container direction="row">
                                            <Grid item>
                                                <i className="material-icons">location_on</i>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit" align="left">
                                                    {activity.state}, {activity.country}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Typography variant="subtitle1" color="inherit" align="left">
                                    {activity.timeOfActivity}
                                </Typography>
                                <Typography variant="body1" color="inherit" align="left">
                                    {activity.workDescription}
                                </Typography>
                            </Paper>)}
                </div>
            </div>
        );
    } 

}

function mapStateToProps(state)
{
    return { extracurricular: state.extracurricular }; 
}

function mapDispatchToProps(dispatch)
{
    return {  getExtracurricular: () => dispatch(actions.getExtracurricular()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Extracurricular);