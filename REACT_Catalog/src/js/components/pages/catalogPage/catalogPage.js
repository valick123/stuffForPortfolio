import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import {Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas, far)

export default class CatalogPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Container>
                <Row>                        
                    <Col md={4} lg={3} className="mb-4">
                        <div className="catalog-card">
                            <FontAwesomeIcon size="2x" fixedWidth className="catalog-card-ico" icon="mobile-alt" />
                            <Link className="catalog-card-link" to='/catalog/phones' >phones</Link>
                        </div>   
                    </Col>        
                    <Col md={4} lg={3} className="mb-4">
                        <div className="catalog-card">
                            <FontAwesomeIcon size="2x" fixedWidth className="catalog-card-ico" icon="tablet-alt" />
                            <Link className="catalog-card-link" to='/catalog/tablets' >tablets</Link>
                        </div>
                    </Col>        
                    <Col md={4} lg={3} className="mb-4">
                        <div className="catalog-card">
                            <FontAwesomeIcon size="2x" fixedWidth className="catalog-card-ico" icon="headphones-alt" />
                            <Link className="catalog-card-link" to='/catalog/headphones' >headphones</Link>
                        </div>
                    </Col>        
                    <Col md={4} lg={3} className="mb-4">
                        <div className="catalog-card">
                            <FontAwesomeIcon size="2x" fixedWidth className="catalog-card-ico" icon="laptop" />
                            <Link className="catalog-card-link" to='/catalog/laptops' >laptops</Link>
                        </div>
                    </Col> 
                    <Col md={4} lg={3} className="mb-4">
                        <div className="catalog-card">
                            <FontAwesomeIcon size="2x" fixedWidth className="catalog-card-ico" icon={["far","clock"]} />
                            <Link className="catalog-card-link" to='/catalog/watches' >watches</Link>
                        </div>
                    </Col>                    
                </Row>
            </Container>
         
        )
    }
} 

                            
                            