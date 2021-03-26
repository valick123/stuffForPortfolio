import React from 'react';
import { Container } from 'reactstrap'
import {Link,} from 'react-router-dom'
import {connect} from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 library.add(fas)


class Header extends React.Component{
    constructor(props){
        super(props);
        this.Menu = React.createRef()
    }
    logOut = () =>{
        localStorage.setItem("isLoged", false);
        this.props.dispatch({
            type:'LOG_OUT',
            payload:false
        })
       
    }
    handleOpenMenu= () =>{
        this.Menu.current.classList.add('menu-block-opened');
        document.body.style.overflow = "hidden"
    }
    handleCloseMenu= () =>{
        this.Menu.current.classList.remove('menu-block-opened');
        document.body.style.overflow = "visible"
    }
    render(){
       
        return(
            <header id={this.props.id} className="header" >
                <Container >
                    <div className="header__inner">
                        <div className="logo-block"> 
                            <Link className="menu-item_link" to="/" >                           
                                <FontAwesomeIcon className="logo-font" icon="font-awesome-logo-full" />
                            </Link>    
                        </div>
                        
                        <button onClick={this.handleOpenMenu} className="menu-toggler" >
                            <FontAwesomeIcon size="lg" icon="bars"/>
                        </button>
                            <div className="menu-block" ref={this.Menu}>
                                <div className="menu-header">
                                    
                                    <button onClick={this.handleCloseMenu} className="menu-toggler">
                                        <FontAwesomeIcon size="lg" icon="arrow-right" />
                                    </button>
                                </div>
                                
                            <ul className="menu" >
                                
                                <li className="menu-item" onClick={this.handleCloseMenu}> 
                                    <Link className="menu-item_link" to="/" >
                                        <FontAwesomeIcon className="menu-item_ico" icon="home" fixedWidth />
                                        Home    
                                    </Link>
                                    
                                </li>    
                                <li className="menu-item" onClick={this.handleCloseMenu}>
                                    <Link className="menu-item_link" to="/catalog" >
                                        <FontAwesomeIcon className="menu-item_ico" icon="th" fixedWidth />
                                        Catalog 
                                    </Link>
                                    
                                </li>    
                                <li className="menu-item" onClick={this.handleCloseMenu}>
                                    <Link className="menu-item_link" to='/bascet'>
                                        <FontAwesomeIcon className="menu-item_ico" icon="shopping-cart" fixedWidth />
                                        Bascet  
                                     </Link>
                                    
                                </li>    
                                <li className="menu-item" onClick={this.handleCloseMenu}>
                                    {this.props.isLoged
                                ?
                                    <a href="#" className="menu-item_link" color="link" onClick={this.logOut}>
                                        <FontAwesomeIcon className="menu-item_ico" icon="sign-out-alt" fixedWidth />
                                        LogOut
                                    </a>
                                
                                :
                                    <Link className="menu-item_link" to="/logIn">
                                        <FontAwesomeIcon className="menu-item_ico" icon="sign-in-alt" fixedWidth />
                                        LogIn
                                    </Link>
                                }
                                    
                                </li>                               
                            </ul>
                            </div>
                            
                        
                            
                            
                           
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