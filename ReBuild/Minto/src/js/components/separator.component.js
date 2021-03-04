import React from "react";
import {SeparatorBG} from "../images";
export const Separator = props => {
    return(
        <div className="separator">
            <p className="separator-text">
                Where We Have Been Featured
            </p>
            <div className="separator-bg" style={{backgroundImage:`url(${SeparatorBG})`}}></div>
        </div>
    )
}