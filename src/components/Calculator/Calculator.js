import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import * as T from "./thibault-math.js";
import Anatomy from "./Anatomy.js";
import Units from "./Units.js";



const InputRow = props => {
    const { label, actual } = props;
    const unit = props.unit || "cm";

    return (
            <tr>
                <td>{label}</td>
                <td><input type="text" placeholder="Enter Your Height"/></td>
            </tr>
        )
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            ThU: 0
        }
    }
    handleChange = event => {
        this.setState({
            height: event.target.value,
            ThU: T.GetThibaultUnitsFromHeight(event.target.value)
        });
    }

    render() {
        return (
            <div onChange={this.handleChange}>
                <br />
                <table>
                <InputRow label="Height" />
                </table>

                <Units ThU={this.state.ThU} />
                <br />
                <Anatomy ThU={this.state.ThU}/>
            </div>
        )
    }
}

export default Calculator
