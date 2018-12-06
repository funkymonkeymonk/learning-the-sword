import React from 'react';
import PropTypes from 'prop-types';
import * as T from './thibault-math.js';

const SwordRow = props => {
  const { description, calculated } = props;
  const unit = props.unit || 'cm';

  return (
    <tr>
      <td>{description}</td>
      <td>{calculated}</td>
      <td>{unit}</td>
      <td>
        <input type="text" size="8" />
      </td>
      <td>{unit}</td>
    </tr>
  );
};

const Sword = props => {
  const { ThU } = props;

  return (
    <div>
      <h2>Sword Measurements</h2>
      <table>
        <tr>
          <th>Description</th>
          <th colSpan="2">Calculated</th>
          <th colSpan="2">Actual</th>
        </tr>
        <SwordRow description="Length Of Blade" calculated={T.getBladeLength(ThU)} />
        <SwordRow description="Length Of Quillions" calculated={T.getQuillionLength(ThU)} />
        <SwordRow description="Length Of Grip and Pommel" calculated={T.getGripAndPommel(ThU)} />
        <SwordRow description="Length Of Ricasso" calculated={T.getRicasso(ThU)} />
      </table>
    </div>
  );
};

SwordRow.propTypes = {
  description: PropTypes.string.isRequired,
  calculated: PropTypes.number.isRequired,
  unit: PropTypes.string,
};

Sword.propTypes = {
  ThU: PropTypes.number.isRequired,
};

export default Sword;
