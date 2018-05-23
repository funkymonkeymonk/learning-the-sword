import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import * as T from "./thibault-math.js"

const styles = theme => ({});

const AnatomyRow = props => {
    const { location, description, calculated} = props;
    const unit = props.unit || "cm";

    return (
        <tr>
            <td>{location}</td>
            <td>{description}</td>
            <td>{calculated}</td>
            <td>{unit}</td>
            <td><input type="text" size="8" /></td>
            <td>{unit}</td>
        </tr>
    )
}

const Anatomy = props => {
    const { ThU } = props
    const distance = T.distanceFromSolesOfTheFeetInThU
    const keys = Object.getOwnPropertyNames(distance)
    const rows = keys.map(k => <AnatomyRow location={distance[k].loc} description={distance[k].desc} calculated={T.getDistanceFromSolesOfTheFeet(k, ThU)} />)

    return (
        <div>
            <h2>Anatomical Measurements - Circle No 1 of Table I</h2>
            <table>
                <tr>
                    <th>Location</th>
                    <th>Description</th>
                    <th colSpan="2">Calculated</th>
                    <th colSpan="2">Actual</th>
                </tr>
                {rows}
            </table>
        </div>
    )
}

AnatomyRow.propTypes = {
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  calculated: PropTypes.number.isRequired,
  unit: PropTypes.string,
};

Anatomy.propTypes = {
  ThU: PropTypes.number.isRequired,
}

export default (injectSheet(styles)(Anatomy))