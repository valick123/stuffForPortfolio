import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, Badge, CardText } from 'reactstrap'
import {Link} from 'react-router-dom'

export default class BascetProductCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Card>
                <CardHeader>
                        <Link to={`/catalog/${this.props.info.productType}/${this.props.info.title}`}>{this.props.info.title}</Link>
                        <Badge color={this.props.info.status=='new'
                                            ?"success"
                                            :this.props.info.status=='sale'
                                            ?"danger"
                                            :this.props.info.status=='top'
                                            ?"primary":
                                            ""}>{this.props.info.status}
                                    </Badge>
                </CardHeader>
                <CardBody>
                        <img src={this.props.info.src} />
                        <CardText>{this.props.info.price}</CardText>
                        <CardText>{this.props.info.full_text}</CardText>
                        
                </CardBody>
                <CardFooter>
                    <Button color="danger" data-product-id = {this.props.info.id}>Delete from bascet</Button>
                </CardFooter>
            </Card>
        )
    }
}