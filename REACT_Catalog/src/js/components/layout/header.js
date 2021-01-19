import React from 'react';
import {Row, Col, Container,Button,Nav, NavItem, NavLink } from 'reactstrap'
import {Link,} from 'react-router-dom'
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom"
import LOGO from '../../../img/placeholder.com-logo.png'

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    logOut = () =>{
        localStorage.setItem("isLoged", false);
        this.props.dispatch({
            type:'LOG_OUT',
            payload:false
        })
       
    }
    render(){
       
        return(
            <header className="header" >
                <Container >
                    <div className="header__inner">
                       <Row>
                        <Col md={2}>
                            <img src={LOGO} style={{
                                width :"100%",
                                maxWidth: 300
                            }} />
                        </Col>
                        <Col md={10}>
                            <Nav>
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
                                <NavItem>
                                    {this.props.isLoged
                                ?<li>
                                    <Button color="link" onClick={this.logOut}>LogOut</Button>
                                </li>
                                :<li>
                                    <Link className="nav-link" to="/logIn">
                                        LogIn
                                    </Link>
                                </li>}
                                    
                                </NavItem>                               
                            </Nav>
                        
                            
                            
                            {/* {!this.props.isLoged
                                ?<Redirect to='/' />
                                :null} */}
                        </Col>
                    </Row> 
                    </div>
                    
                </Container>
            </header>
        )
    }
}
const mapStateToProps = (store) =>{
    return {
        ...store.logInStatus
    }
}
export default connect(mapStateToProps)(Header)