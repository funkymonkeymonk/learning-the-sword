import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import * as T from "./thibault-math.js"

const shittyRound2 = x => Math.round(x * 100) / 100

const HeaderRow = props => {
    return (
        <th>
            <td>Measure</td>
            <td>Calculated</td>
            <td colSpan="2">Actual</td>
        </th>
    )
}

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

const UnitRow = props => {
    const { label, calculated} = props;
    const unit = props.unit || "cm";

    return (
        <tr>
            <td>{label}</td>
            <td>{calculated} {unit}</td>
        </tr>
    )
}

const MeasurementRow = props => {
    const { label, calculated, actual } = props;
    const unit = props.unit || "cm";

    return (
        <tr>
            <td>{label}</td>
            <td>{calculated} {unit}</td>
            <td><input type="text" value={actual}/></td>
            <td>{unit}</td>
        </tr>
    )
}

const Measurements = props => {
    const { ThU } = props
    const values = Object.values(T.distanceFromSolesOfTheFeetInThU)
    const rows = values.map(v => <MeasurementRow label={v.name} calculated={shittyRound2(v.distance * ThU)} />)

    return (
        <div>
            <h2>Measurements</h2>
            <table>
                <HeaderRow />
                {rows}
            </table>
        </div>
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
                <h2>Unit conversions</h2>
                <table>
                    <HeaderRow />
                    <InputRow label="Height" />
                    <UnitRow label="Thibault Unit (ThU)" calculated={shittyRound2(this.state.ThU)} />
                    <UnitRow label="Part" calculated={shittyRound2(T.GetPartFromThU(this.state.ThU))} />
                    <UnitRow label="Minute" calculated={shittyRound2(T.GetMinuteFromThU(this.state.ThU))} unit="mm"/>
                </table>
                <br />
                <Measurements ThU={this.state.ThU}/>
            </div>
        )
    }
}

UnitRow.propTypes = {
  label: PropTypes.string.isRequired,
  calculated: PropTypes.number.isRequired,
  unit: PropTypes.string,
};

export default Calculator
