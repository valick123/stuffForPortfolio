import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas} from "@fortawesome/free-solid-svg-icons";
library.add(fas)

export const TopScroller = props =>{
    const handleClick = () =>{
        const target = document.querySelector(props.target)
        target.scrollIntoView({block: "center", behavior: "smooth"})
    }
    const scroller = useRef();
    window.addEventListener('scroll',()=>{
        if(window.pageYOffset >=300){
            scroller.current.classList.add('btn-scroller_visible')
        } else {
            scroller.current.classList.remove('btn-scroller_visible')
        }
    })
    return (
        <button ref={scroller} className="btn-scroller " onClick={handleClick} >
            <FontAwesomeIcon  icon='arrow-up' />
        </button>
    )
}