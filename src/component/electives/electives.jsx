import React, { Component} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";

class Electives extends Component{

    constructor(props)
    {
        super(props);
    }

    // componentDidMount()
    // {
    //     // this.props.getElectives();
    // }

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