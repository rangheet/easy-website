import React, { Component, Fragment} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import { map } from "lodash";
import {Paper, Typography, Grid} from "@material-ui/core";
import "./extracurricular.css";
import "../../main-component.css";

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
                <Typography variant="h4" color="inherit">
                    Extracurriculars:
                </Typography>
                {map(extracurricular,(activity,index) =>      
                    <Paper square key={index} className="commonPaper">
                        <Grid container direction="column">
                            <Grid item>
                                <Typography variant="h5" color="inherit">
                                    {activity.organization}
                                </Typography>                                                                
                                <Grid container direction="row">
                                    <Grid item>
                                        <i className="material-icons">person</i>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1" color="inherit">
                                            {activity.position}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography variant="body2" color="inherit">
                                    Description:
                                    <li>{activity.workDescription}</li>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <div className="extracurricularLocationTime">
                                    <Typography variant="subtitle1" color="inherit">
                                        {activity.timeOfActivity}
                                    </Typography>
                                    <Grid container direction="row">
                                        <Grid item>
                                            <i className="material-icons">location_on</i>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1" color="inherit">
                                                {activity.state}, {activity.country}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>)}
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