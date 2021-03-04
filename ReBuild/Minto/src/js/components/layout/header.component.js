import React, { useRef } from 'react';
import {Logo} from "../../images"



export const HeaderComponent = (props) => {
    const menuBlock = useRef(null);
    const openMenu = (e) =>{
        e.preventDefault();
        menuBlock.current.classList.toggle("menu-active");
        console.log(menuBlock);
    }
    
    
        return (
            <header className="header">
               <div className="content">
                   <div className="header__inner">
                       <div className="logo">
                           <img src={Logo} alt=""/>
                           <span className="logo-text">
                               Minto
                           </span>
                       </div>
                       <div ref={menuBlock} className="menu-block">
                           <a onClick={openMenu} href="#" className="menu-btn">
                               <span></span>
                           </a>
                           <nav className="menu">
                               <div className="menu_item">
                                   <a href="#home" className="menu_item-link home-link">
                                       Home
                                   </a>
                               </div>
                               <div className="menu_item">
                                   <a href="#about" className="menu_item-link about-link">
                                       About Us
                                   </a>
                               </div>
                               <div className="menu_item">
                                   <a href="#services" className="menu_item-link services-link">
                                       Services
                                   </a>
                               </div>
                               <div className="menu_item">
                                   <a href="#contactUs" className="menu_item-link contact-link">
                                       contact Us
                                   </a>
                               </div>
                           </nav>
                       </div>
                   </div>
               </div>
            </header>
        )
    
}
