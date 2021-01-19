import React from 'react'
import {connect} from 'react-redux'
import { Container, Row, Col, Spinner, Card, CardFooter, CardHeader, CardBody, Button, CardTitle, CardText } from 'reactstrap'
import {Link} from 'react-router-dom'

class NewsPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoading:true
        }
    }
    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
        .then(responce=>responce.json())
        .then(data=>{
            this.props.dispatch({
                type:'GET_NEWS_INFO',
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
                    <Col>
                    {
                            this.state.isLoading
                        ?<Spinner type="grow" color="primary"  />
                        :<Card>
                        <CardBody>
                            <CardTitle tag="h1" >{this.props.newsInfo.title}</CardTitle>
                        
                            <CardText>{this.props.newsInfo.body}</CardText>
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

const mapStateToProps = (store)=>{
    return{
        newsInfo:store.homePage.newsPageInfo
    }
}
export default connect(mapStateToProps)(NewsPage)