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
        if(!this.props.posts.length || !this.props.news.length){
            fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response=>response.json())
        .then(posts=>{
            this.props.dispatch({
                // type:'GET_HOME_PAGE_POSTS',
                type:'GET_POSTS',
                payload:posts
            })
        }).then(()=>fetch('https://jsonplaceholder.typicode.com/photos')
        )
        .then(response=>response.json())
        .then(imgs=>{
                this.props.dispatch({
                    // type:'GET_HOME_PAGE_POSTS_IMGS', 
                    type:'GET_POSTS_IMGS', 
                    payload:imgs
                })
            }
        )
        .then(()=>fetch('https://jsonplaceholder.typicode.com/posts')
        )
        .then(response=>response.json())
        .then(data=>{
                    this.props.dispatch({
                        type:'GET_NEWS',
                        payload:data
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
                        <div className="content">
                            <div className="content-header">
                               <Link to="/news">
                                    <h1>
                                        News
                                    </h1>
                                </Link> 
                            </div>
                            <div className="content-body">
                                {           
                                    this.props.news.map((item)=>{
                                        if(item.id <=10){
                                            return <NewsCard info={item} key={item.id} />
                                        }
                                        
                                    })
                                }
                            </div>
                        
                        
                        </div>
                        
                    </Col>
                    <Col  lg={7}>
                        <div className="content">
                            <div className="content-header">
                                <Link to="/posts" >
                                    <h1>
                                        Posts
                                    </h1>                            
                                </Link>
                            </div>
                            <div className="content-body">
                                {this.props.posts.map((item)=>{
                                    return this.props.postsImgs.map((img)=>{
                                        if(item.id === img.id && item.id <= 10 ){
                                            return <PostCard info={item} img={img} key={item.id} />
                                            }
                                        })
                                
                                        }) 
                                    }     
                            </div>
                                                    
                            
                        </div>
                        
                                                    
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
        // posts:store.homePage.homePagePosts,
        // postsImgs:store.homePage.homePagePostsImgs,
        posts:store.postsPage.posts,
        postsImgs:store.postsPage.postsImgs,
        news:store.newsPage.news
    }
}
export default connect(mapStateToProps)(HomePage)