import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, Badge, CardText, CardImg } from 'reactstrap'
import {Link} from 'react-router-dom'

export default class BascetProductCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Card  >  
                <CardBody>
                        <Link to={`/catalog/${this.props.info.productType}/${this.props.info.title}`}>{this.props.info.title}</Link>
                        <Badge color={this.props.info.status=='new'
                                            ?"success"
                                            :this.props.info.status=='sale'
                                            ?"danger"
                                            :this.props.info.status=='top'
                                            ?"primary":
                                            ""}>{this.props.info.status}
                                    </Badge>
               
                        <CardImg src={this.props.info.src} />
                        <CardText>{this.props.info.price}</CardText>
                        <CardText>{this.props.info.full_text}</CardText>
                        
                    <Button color="danger" data-product-id = {this.props.info.id}>Delete</Button>
                </CardBody>
            </Card>
        )
    }
}