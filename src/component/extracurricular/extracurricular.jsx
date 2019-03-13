import React, { Component, Fragment} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import { map } from "lodash";

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
            <div>
                <h2>Extracurricular: </h2>
                {map(extracurricular,(activity,index) => <Fragment key={index.toString()}> 
                                                            <h4>Extracurricular activity: {activity.organization}</h4> <br/>
                                                            Duration of Activity: {activity.timeOfActivity} <br/>
                                                            Position: {activity.position} <br/>
                                                            State, Country: {activity.state}, {activity.country} <br/>
                                                            Work Description: {activity.workDescription}
                                                        </Fragment>)}
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