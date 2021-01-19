import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button,CardTitle,CardText,CardLink } from 'reactstrap';
import {Link} from 'react-router-dom'
export default class PostCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Card>
                <CardBody>
                    <CardTitle tag="h5">{`#${this.props.info.id} ${this.props.info.name}`}</CardTitle >
                
                    <img src = {this.props.img.thumbnailUrl}/>
                    <CardText>
                    {this.props.info.body}
                    </CardText>
                    <CardLink href={`mailto:${this.props.info.email}`}>{this.props.info.email}</CardLink>
                </CardBody>
                <CardFooter>
                <Link to={`/post/${this.props.info.id}`}>
                        <Button color="primary" >More</Button>
                    </Link>
                </CardFooter>
            </Card>
        )
    }
}