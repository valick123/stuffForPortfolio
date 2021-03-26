import React from 'react';
import { Container, Row , Col, Spinner} from 'reactstrap';
import {connect} from 'react-redux'
import PostCard from '../postsPage/postCard';
import NewsCard from '../newsPage/newsCard'
import { SlickSleder } from '../../slider.component';
import { Link } from 'react-router-dom';


 class HomePage extends React.Component{
    constructor(props){
      super(props)
      this.state={
          isLoading:true
      }
    }
    componentDidMount(){
        if(!this.props.posts.length){
            fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response=>response.json())
        .then(posts=>{
            this.props.dispatch({
                type:'GET_HOME_PAGE_POSTS',
                payload:posts
            })
        }).then(()=>fetch('https://jsonplaceholder.typicode.com/photos')
        )
        .then(response=>response.json())
        .then(imgs=>{
                this.props.dispatch({
                    type:'GET_HOME_PAGE_POSTS_IMGS',
                    payload:imgs
                })
            }
        )
        .then(()=>fetch('https://jsonplaceholder.typicode.com/posts')
        )
        .then(response=>response.json())
        .then(imgs=>{
                    this.props.dispatch({
                        type:'GET_HOME_PAGE_NEWS',
                        payload:imgs
                    })
                    this.setState({
                        isLoading:false
                    }
                )
            }
        )
        
        } else{
            this.setState({
                isLoading:false
            })
        }

        
            
        
    }
    render(){
       
        return (
            <Container>
                <SlickSleder/>
                {!this.state.isLoading
                ?<Row className="gy-2">
                    <Col  lg={5}>
                        <Link to="/news">
                            <h1>
                                News
                            </h1>
                        </Link>
                        
                        {           
                            this.props.news.map((item)=>{
                                return <NewsCard info={item} key={item.id} />
                            })
                        }
                    </Col>
                    <Col  lg={7}>
                        <Link to="/posts" >
                            <h1>
                                Posts
                            </h1>                            
                        </Link>
                                                    
                            {this.props.posts.map((item)=>{
                            return this.props.postsImgs.map((img)=>{
                                if(item.id === img.id ){
                                     return <PostCard info={item} img={img} key={item.id} />
                                    }
                                })
                           
                            }) } 
                                                    
                    </Col>
                    
                </Row>                
                :<Spinner className="loader" type="grow" color="primary"/>
                
                }
                
            </Container>
        )
    }
} 

const mapStateToProps = (store)=>{
    return {
        posts:store.homePage.homePagePosts,
        postsImgs:store.homePage.homePagePostsImgs,
        news:store.homePage.homePageNews
    }
}
export default connect(mapStateToProps)(HomePage)