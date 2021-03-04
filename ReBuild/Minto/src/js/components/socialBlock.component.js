import React from "react";
import {fbIco,twIco} from '../images'

export const SocialBlock = props => {
    return(
        <div className="social-block">
                                                <ul className="social">
                                                        <li className="social-item">
                                                                <a href="#">
                                                                        <img src={fbIco} alt=""/>
                                                                </a>
                                                        </li>
                                                        <li className="social-item">
                                                                <a href="#">
                                                                        <img src={twIco} alt=""/>
                                                                </a>
                                                        </li>
                                                </ul>
                                        </div>
    )
}