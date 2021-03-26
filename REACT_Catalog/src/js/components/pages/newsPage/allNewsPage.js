import React, { useEffect, useState } from "react";
import {connect} from "react-redux";
import{Container, Row, Col, Spinner} from "reactstrap";
import NewsCard from "./newsCard"

const AllNewsPage = props => {
    const [isloading, setIsLoading] = useState(true);
    useEffect(()=>{
        if(!props.news.length){
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=>response.json())
            .then(imgs=>{
                        props.dispatch({
                            type:'GET_NEWS',
                            payload:imgs
                        })
                }
            )
            .then(()=>{
                setIsLoading(false)
            })
        } else {
            setIsLoading(false)
        }
    },[])
    return (
        <Container className="allNewsPage">
            <Row>
                        {!isloading           
                            ?props.news.map((item)=>{
                                return(
                                    <Col className="mb-4" md={6} lg={4} key={item.id}>
                                        <NewsCard info={item}   />
                                    </Col>
                                    
                                ) 
                            })
                            :<Spinner type="grow" color="primary" />
                        }
            </Row>
        </Container>
    )
}

const mapStateToProps = store =>{
    return{
        news:store.newsPage.news
    }
}
export default connect(mapStateToProps)(AllNewsPage)