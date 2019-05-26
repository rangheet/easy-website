import { Component } from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";

class Logos extends Component{
    
    // componentDidMount()
    // {
    //     // this.props.getLogos();
    // }
    render()
    {
        return null;
    }
}

function mapDispatchToProps(dispatch)
{
    return {  getLogos: () => dispatch(actions.getLogos()) };
}

export default connect(null, mapDispatchToProps)(Logos);