import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import * as T from "./thibault-math.js"

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

const Units = props => {
    const ThU = props.ThU;

    return (
        <div>
            <h2>Unit conversions</h2>
            <table>
                <tr>
                    <th>Measure</th>
                    <th>Calculated</th>
                </tr>

                <UnitRow label="Thibault Unit (ThU)" calculated={T.round2(ThU)} />
                <UnitRow label="Part" calculated={T.round2(T.GetPartFromThU(ThU))} />
                <UnitRow label="Minute" calculated={T.round2(T.GetMinuteFromThU(ThU))} />
            </table>
        </div>
    )
}

UnitRow.propTypes = {
  label: PropTypes.string.isRequired,
  calculated: PropTypes.number.isRequired,
  unit: PropTypes.string,
};

Units.propTypes = {
  ThU: PropTypes.number.isRequired,
}

export default Units