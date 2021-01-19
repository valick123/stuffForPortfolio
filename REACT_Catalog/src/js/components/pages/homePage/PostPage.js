import React from 'react'
import { Container, Row, Col, Card, CardBody, CardHeader, CardFooter, Spinner, Button, CardTitle } from 'reactstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class PostPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoading:true
        }
    }
    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/comments/${this.props.match.params.id}`)
        .then(responce=>responce.json())
        .then(data=>{
            this.props.dispatch({
                type:'GET_POST_INFO',
                payload:data
                }) 
           
               
                this.setState({
                    isLoading:false
                })
           
        })
    }
    render(){
        return(
            <Container>
                <Row>
                    <Col md={12}>
                        {
                            this.state.isLoading
                        ?<Spinner type="grow" color="primary"  />
                        :<Card>
                            <CardBody>
                                <CardTitle tag="h1" >{this.props.postInfo.name}</CardTitle>
                            
                            
                                <p>{this.props.postInfo.body}</p>
                            </CardBody>
                            <CardFooter>
                                <Link to="/" ><Button color="info" >Back</Button></Link>
                                
                            </CardFooter>
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
        postInfo:store.homePage.postPageInfo
    }
}
export default connect(mapStateToProps)(PostPage)