import React, { useEffect, useState } from "react";
import {connect} from "react-redux";
import{Container,Row,Col, Spinner} from "reactstrap";
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
        <Container>
            <Row>
                <Col md={12}>
                        {!isloading           
                            ?props.news.map((item)=>{
                                return <NewsCard info={item} key={item.id} />
                            })
                            :<Spinner type="grow" color="primary" />
                        }
                </Col>
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