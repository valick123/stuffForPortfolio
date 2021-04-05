import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button,CardTitle,CardText,CardLink, CardImg } from 'reactstrap';
import {Link} from 'react-router-dom'
export default class PostCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Card className="mb-4 post-card">
                <CardBody>
                    <CardTitle tag="h5">{`#${this.props.info.id} ${this.props.info.name}`}</CardTitle >
                
                    <CardImg style={{width:"auto",maxWidth:"100%"}} src = {this.props.img.thumbnailUrl}/>
                    <CardText>
                    {this.props.info.body}
                    </CardText>
                    <CardLink href={`mailto:${this.props.info.email}`}>{this.props.info.email}</CardLink>
                    <div style={{paddingTop:10}} >
                    <Link to={`/posts/${this.props.info.id}`}>
                        <Button   color="primary" >Read more</Button>
                    </Link>
                    </div>
                </CardBody>
                {/* <CardBody> */}
                {/* <Link to={`/posts/${this.props.info.id}`}>
                        <Button   color="primary" >Read more</Button>
                    </Link> */}
                {/* </CardBody> */}
            </Card>
        )
    }
}