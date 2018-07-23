import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import * as T from "./thibault-math.js";
import Units from "./Units.js";
import Anatomy from "./Anatomy.js";
import Sword from "./Sword.js";

// TODO: Create a print button

const styles = theme => ({});

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ThU: 0 }
    }
    handleChange = event => {
        this.setState({
            ThU: T.GetThibaultUnitsFromHeight(event.target.value)
        });
    }

    render() {
        return (
            <div>
                <br />
                <p>Height: <input onChange={this.handleChange} type="text" size="8"/> cm</p>
                <br />
                <Units ThU={this.state.ThU} />
                <br />
                <Anatomy ThU={this.state.ThU}/>
                <br />
                <Sword ThU={this.state.ThU}/>
            </div>
        )
    }
}

export default (injectSheet(styles)(Calculator))
