import React from 'react';
import { Container, Row, Col, Button,Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import {fab} from "@fortawesome/free-brands-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 library.add(fab,fas)
export default class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(window.screen.height,window.screen.width)
        return(
            <footer className="footer" >
                <Container>
                    <div className="footer__inner">
                    <Row>
                        <Col md={3} sm={5}>
                            <Nav vertical className="bottomMenu">
                                <NavItem className="bottomMenu-item">
                                    <Link className="nav-link bottomMenu-item_link" to="/" >
                                        <FontAwesomeIcon className="bottomMenu-item_ico" fixedWidth icon={["fas",'home']} />
                                        Home    
                                    </Link>
                                    
                                </NavItem>    
                                <NavItem className="bottomMenu-item">
                                    <Link className="nav-link bottomMenu-item_link" to="/catalog" >
                                        <FontAwesomeIcon className="bottomMenu-item_ico" fixedWidth icon={["fas",'th']} />
                                        Catalog 
                                    </Link>
                                    
                                </NavItem>    
                                <NavItem className="bottomMenu-item">
                                    <Link className="nav-link bottomMenu-item_link" to='/bascet'>
                                        <FontAwesomeIcon className="bottomMenu-item_ico" fixedWidth icon={["fas",'shopping-cart']} />
                                        Bascet  
                                     </Link>
                                    
                                </NavItem>    
                                                             
                            </Nav>
                        </Col>
                        <Col md={3} sm={5}>
                            <Nav vertical className="socials">
                                <NavItem className="socials-item">
                                    <NavLink className="socials-item_link" href="#">
                                        <FontAwesomeIcon className="socials-item_ico" fixedWidth icon={["fab",'vk']} />
                                        Vkontakte
                                    </NavLink>
                                </NavItem>
                                <NavItem className="socials-item">
                                    <NavLink className="socials-item_link" href="#">
                                        <FontAwesomeIcon className="socials-item_ico" fixedWidth icon={["fab",'facebook-f']} />
                                        FaceBook
                                    </NavLink>
                                </NavItem>
                                <NavItem className="socials-item">
                                    <NavLink className="socials-item_link" href="#">
                                        <FontAwesomeIcon className="socials-item_ico" fixedWidth icon={["fab",'instagram']} />
                                        Instagram
                                    </NavLink>
                                </NavItem>
                                <NavItem className="socials-item">
                                    <NavLink className="socials-item_link" href="#">
                                        <FontAwesomeIcon className="socials-item_ico" fixedWidth icon={["fab",'youtube']} />
                                        YouTube
                                    </NavLink>
                                </NavItem>
                                <NavItem className="socials-item">
                                    <NavLink className="socials-item_link" href="#">
                                        <FontAwesomeIcon className="socials-item_ico" fixedWidth icon={["fab",'twitter']} />
                                        Twitter
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col md={6} sm={12}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1175.4081463209536!2d27.560525212726926!3d53.89946908332831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfa656606d61%3A0x85e0ec8ffda77e14!2sKomp&#39;yuternaya%20Akademiya%20Shag%20Minsk!5e0!3m2!1sen!2sby!4v1606820512282!5m2!1sen!2sby" 
                            width="100%" 
                            height="100%" 
                            frameBorder="0" 
                            style={{
                                border:"1px solid rgba(193, 192, 247, .8)",
                                borderRadius:10
                            }} 
                            allowFullScreen="" 
                            aria-hidden="false" 
                            tabIndex="0"
                        ></iframe>                        
                        </Col>
                    </Row>
                    </div>
                    
                </Container>
            </footer>
        )
    }
}