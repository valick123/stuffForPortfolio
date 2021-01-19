import React from 'react'
import { Container, Row, Col, CardColumns, Card,CardDeck } from 'reactstrap'
import {Link} from 'react-router-dom'

export default class CatalogPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Container>
                <Row>
                    <Col md={12}>
                        <CardDeck >
                            
                                <Card body >
                                    <Link to='/catalog/phones' >phones</Link>
                                </Card>
                                    
                            <Card body>
                                    <Link to='/catalog/tablets' >tablets</Link>
                                </Card>
                            <Card body>
                                    <Link to='/catalog/headphones' >headphones</Link>
                                </Card>
                            <Card body>
                                    <Link to='/catalog/laptops' >laptops</Link>
                                </Card>
                        </CardDeck>
                    </Col>
                </Row>
            </Container>
         
        )
    }
} 

                            
                            