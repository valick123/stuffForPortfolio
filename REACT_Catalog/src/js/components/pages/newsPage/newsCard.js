import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button,CardTitle,CardText,CardLink } from 'reactstrap';
import {Link} from "react-router-dom"

export default class NewsCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Card className="mb-4 news-card">
                <CardBody>
                    <CardTitle tag="h5">{`#${this.props.info.id} ${this.props.info.title}`}</CardTitle >
               
                
                    <CardText >
                    {this.props.info.body}
                    </CardText>
                    <CardLink href={`mailto:${this.props.info.email}`}>{this.props.info.email}</CardLink>
                
                    <Link to={`/news/${this.props.info.id}`}>
                        <Button   color="primary"  >Read more</Button>
                    </Link>
                    </CardBody>
            </Card>
        )
    }
}