import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, Badge,CardImg, CardText, CardTitle  } from 'reactstrap'
import {Link} from 'react-router-dom'

export default class ProductCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Card className="product-card">
                <CardBody>
                    <CardTitle>
                        <Link to={`/catalog/${this.props.info.productType}/${this.props.info.title}`}>{this.props.info.title}</Link>
                    </CardTitle>    
                        <Badge color={this.props.info.status=='new'
                        ?"success"
                        :this.props.info.status=='sale'
                        ?"danger"
                        :this.props.info.status=='top'
                        ?"primary":
                        ""}>{this.props.info.status}</Badge>
                
                
                        <CardImg src={this.props.info.src} />
                        <CardText>{this.props.info.price}</CardText>
                        <CardText>{this.props.info.full_text}</CardText>
                        
                
                
                    <Button color="success" data-product-id = {this.props.info.id}>Add to bascet</Button>
                </CardBody>
            </Card>
        )
    }
}