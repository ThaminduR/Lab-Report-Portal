import React, { Component } from "react";
import { checkPropTypes } from "prop-types";

import { Link } from "react-router-dom";

function Button(props) {
    return (

        <button
            onClick={props.onClick}>
            <Link to={props.to}></Link>
            {props.display}
        </button>
    )

}

export default Button