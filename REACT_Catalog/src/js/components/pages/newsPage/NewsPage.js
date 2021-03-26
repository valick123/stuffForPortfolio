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
                    <Col md={{size:10,offset:1}}>
                    {
                            this.state.isLoading
                        ?<Spinner type="grow" color="primary"  />
                        :<Card>
                        <CardBody>
                            <CardTitle tag="h1" >{this.props.newsInfo.title}</CardTitle>
                        
                            <CardText>{this.props.newsInfo.body}</CardText>
                            <CardText>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Aperiam minus eligendi molestias voluptas numquam doloremque quasi officia aut atque laboriosam rerum id obcaecati, 
                                adipisci iure sunt reprehenderit delectus sed, eum consectetur assumenda incidunt! Ratione, eum expedita commodi reprehenderit, 
                                voluptatem nam id, voluptates ipsum ea repudiandae aspernatur maiores nulla libero! 
                                Inventore culpa magni iste veritatis laborum debitis recusandae laudantium officiis rerum, dolores adipisci tenetur, sint repellat dicta? 
                                Nisi voluptates ipsa similique, saepe aut alias vitae! Vitae eveniet perferendis id recusandae deleniti numquam autem obcaecati, consequatur, 
                                eum nostrum maiores possimus, magnam labore saepe aut? Consectetur tempore ipsam quam quidem qui aliquid debitis at iusto unde impedit. 
                                Sapiente facere quis repellat rerum illo repellendus dignissimos, cupiditate quae ex harum odio vel rem dolores, fugit impedit cumque deserunt! 
                                Officia deserunt debitis impedit, tenetur inventore porro nulla sit distinctio deleniti aliquam provident voluptas facilis, quibusdam architecto ducimus! 
                                Provident odio assumenda alias excepturi explicabo ipsam ipsa recusandae eos porro nostrum, illum aliquid? Commodi unde totam veniam minima laborum optio culpa, 
                                quisquam, atque eligendi aspernatur illo, placeat saepe ex harum excepturi dicta? 
                                Fugit eligendi vitae veniam esse voluptate reprehenderit officiis nam at eveniet fugiat? 
                                Eaque, repudiandae quo, neque magni doloremque exercitationem reiciendis, totam optio temporibus libero vel.
                            </CardText>
                            <Link to="/" ><Button color="primary" >Back</Button></Link>
                            
                        </CardBody>
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
        newsInfo:store.newsPage.newsPageInfo
    }
}
export default connect(mapStateToProps)(NewsPage)