import React from 'react';
import { Container, Row, Col, Button,Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom'

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
                        <Col md={5} sm={5}>
                            <Nav vertical>
                                <NavItem>
                                    <Link className="nav-link" to="/" >
                                        Home    
                                    </Link>
                                    
                                </NavItem>    
                                <NavItem>
                                    <Link className="nav-link" to="/catalog" >
                                        Catalog 
                                    </Link>
                                    
                                </NavItem>    
                                <NavItem>
                                    <Link className="nav-link" to='/bascet'>
                                        Bascet  
                                     </Link>
                                    
                                </NavItem>    
                                                             
                            </Nav>
                        </Col>
                        <Col md={3} sm={5}>
                            <Nav vertical>
                                <NavItem>
                                    <NavLink href="#">
                                        vk
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        faceBook
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        instagram
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        youtube
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        twitter
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col md={4} sm={12}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1175.4081463209536!2d27.560525212726926!3d53.89946908332831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfa656606d61%3A0x85e0ec8ffda77e14!2sKomp&#39;yuternaya%20Akademiya%20Shag%20Minsk!5e0!3m2!1sen!2sby!4v1606820512282!5m2!1sen!2sby" 
                            width="100%" 
                            height="auto" 
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