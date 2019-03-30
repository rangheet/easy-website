import React, { Component, Fragment} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import { map } from "lodash";
import {Typography, Chip, Avatar} from '@material-ui/core';

class Electives extends Component{

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this.props.getElectives();
    }

    render()
    {
        return null;
    } 

}

function mapStateToProps(state)
{
    return { electives: state.electives }; 
}

function mapDispatchToProps(dispatch)
{
    return {  getElectives: () => dispatch(actions.getElectives()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Electives);