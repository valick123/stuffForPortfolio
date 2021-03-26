import React, { useEffect,useState } from "react";
import { connect } from "react-redux";
import {Col, Container, Row, Spinner} from "reactstrap";
import PostCard from './postCard'

const PostsPage = props => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        if(!props.posts.length){
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response=>response.json())
        .then(posts=>{
            props.dispatch({
                type:'GET_POSTS',
                payload:posts
            })
        }).then(()=>fetch('https://jsonplaceholder.typicode.com/photos')
        )
        .then(response=>response.json())
        .then(imgs=>{
                props.dispatch({
                    type:'GET_POSTS_IMGS',
                    payload:imgs
                })
            }
        )
        .then(()=>{
            setIsLoading(false)
        })
    } else{
        setIsLoading(false)
    }
    
    },[])
    return(
        <Container>
            <Row>
                <Col md={12}>
                    {!isLoading
                        ?props.posts.map((item)=>{
                            return props.postsImgs.map((img)=>{
                                if(item.id === img.id){
                                     return <PostCard info={item} img={img} key={item.id} />
                                    }
                                })
                           
                            }) 
                        :<Spinner type="grow" color="primary" />    
                    } 
                </Col>
            </Row>
        </Container>
        
    )
}

const mapStateToProps = store =>{
    return {
        posts:store.postsPage.posts,
        postsImgs:store.postsPage.postsImgs,
    }
}

export default connect(mapStateToProps)(PostsPage)