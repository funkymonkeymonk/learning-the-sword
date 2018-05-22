import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import * as T from "./thibault-math.js"

const AnatomyRow = props => {
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

const Anatomy = props => {
    const { ThU } = props
    const values = Object.values(T.distanceFromSolesOfTheFeetInThU)
    const rows = values.map(v => <AnatomyRow label={v.name} calculated={T.round2(v.distance * ThU)} />)

    return (
        <div>
            <h2>Anatomical Measurements</h2>
            <table>
                <tr>
                    <th>Measure</th>
                    <th>Calculated</th>
                    <th colSpan="2">Actual</th>
                </tr>
                {rows}
            </table>
        </div>
    )
}

AnatomyRow.propTypes = {
  label: PropTypes.string.isRequired,
  calculated: PropTypes.number.isRequired,
  unit: PropTypes.string,
};

Anatomy.propTypes = {
  ThU: PropTypes.number.isRequired,
}

export default Anatomy