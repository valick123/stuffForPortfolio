import React from 'react'
import { Container, Row, Col, Card, CardBody,  Spinner, Button, CardTitle, CardText, CardLink, CardImg, Collapse, ButtonGroup } from 'reactstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {CommentCard} from "./postCommentsCard";



class PostPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoading:true,
            isOpen:false
        }
    }
    collapseToggle = () => {
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/comments/${this.props.match.params.id}`)
        .then(responce=>responce.json())
        .then(data=>{
            this.props.dispatch({
                type:'GET_POST_INFO',
                payload:data
                }) 
           
               
               
           
        })
        .then(
            ()=>fetch(`https://jsonplaceholder.typicode.com/photos/${this.props.match.params.id}`)
        )
        .then(response=>response.json())
        .then(img=>{
            this.props.dispatch({
                type:"GET_POST_IMG",
                payload:img.url
            })
        })
        .then(()=>fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.id}`))
        .then(response=>response.json())
        .then(comments=>this.props.dispatch({
            type:"GET_POST_COMMENTS",
            payload:comments
        }))
        .then(()=>{
            this.setState({
                isLoading:false
            })
        })
    }
    render(){
        return(
            <Container>
                <Row>
                    <Col md={{size:10,offset:1}}>
                        {
                            this.state.isLoading
                                ?<Spinner type="grow" color="primary"  />
                                :<Card>
                                    <CardBody>
                                        <CardTitle tag="h1" >{this.props.postInfo.name}</CardTitle>
                                        <CardImg style={{width:"auto",maxWidth:"100%"}} src={this.props.postImg} />
                                        <CardText>{this.props.postInfo.body}</CardText>
                                        <CardLink href={`mailto:${this.props.postInfo.email}`}>
                                            {
                                            this.props.postInfo.email 
                                            }
                                        </CardLink>
                                    {/* </CardBody> 
                                    <CardBody>    */}
                                    <div className="btn-block">
                                        <Link to="/" >
                                            <Button color="primary" >Back</Button>
                                        </Link>
                                        <Button onClick={this.collapseToggle}>Comments</Button>
                                    </div>
                                        
                                    </CardBody>
                                    <Collapse isOpen={this.state.isOpen}>
                                        {
                                            this.props.comments.map((item, index)=>{
                                                return <CommentCard key={index} comment={item} />
                                            })
                                        }
                                    </Collapse>
                                </Card>
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}
const mapStateToProps =(store)=>{
    return{
        postInfo:store.postsPage.postPageInfo,
        postImg:store.postsPage.postPageImg,
        comments:store.postsPage.postPageComments
    }
}
export default connect(mapStateToProps)(PostPage)