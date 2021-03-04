import React from "react";
import {AboutCom,Mashble,TechCrunch,BuisnessWeek} from '../images';
export const Partners = props =>{
    return(
        <div className="partners">
            <ul className="partners-list">
                <li className="partners-item">
                    <a href="#" className="partners-link">
                        <img src={AboutCom} alt=""/>
                    </a>
                </li>
                <li className="partners-item">
                    <a href="#" className="partners-link">
                        <img src={Mashble} alt=""/>
                    </a>
                </li>
                <li className="partners-item">
                    <a href="#" className="partners-link">
                        <img src={TechCrunch} alt=""/>
                    </a>
                </li>
                <li className="partners-item">
                    <a href="#" className="partners-link">
                        <img src={BuisnessWeek} alt=""/>
                    </a>
                </li>
            </ul>
        </div>
    )
}