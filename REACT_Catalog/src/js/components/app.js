import React from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom'
import HomePage from './pages/homePage/homePage';
import CatalogPage from './pages/catalogPage/catalogPage';
import NotFoundPage from './pages/notFoundPage/notFoundPage';
import BascetPage from './pages/bascetPage/bascetPage';
import LogInPage from './pages/logInPage/loInPage';
import PostPage from './pages/postsPage/PostPage';
import NewsPage from './pages/newsPage/NewsPage';
import CategoryPage from './pages/catalogPage/categoryPage';
import ProductPage from './pages/catalogPage/productPage';
import PrivateRoute from './privateRoute';
import {TopScroller} from "./topScroller.component"
import PostsPage from './pages/postsPage/PostsPage';
import AllNewsPage from './pages/newsPage/allNewsPage';

const repoName = "/MyReactCatalogEXP/";

export default class App extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        localStorage.clear()
        localStorage.setItem('isLoged', false)        
    }
    render(){
        
        return ( 
        <Router basename={process.env.NODE_ENV==="development"?null:repoName}>
            <Header id="header"/>
            <main className='main'>
                <Switch>
                    <Route exact path = "/" component={HomePage} />
                    <Route exact path="/posts" component={PostsPage} />  
                    <Route path ="/posts/:id" component = {PostPage} />  
                    <Route exact path="/news" component={AllNewsPage} />
                    <Route path = "/news/:id" component={NewsPage} />        
                    <Route exact path = "/catalog" component={CatalogPage} /> 
                    <Route exact path = "/catalog/:category" component={CategoryPage} />
                    <Route path = "/catalog/:category/:product" component={ProductPage} />
                    <Route path = "/logIn" component = {LogInPage} />
                    <PrivateRoute path = '/bascet' component={BascetPage} />
                    <Route path='*' component={NotFoundPage} />          
                </Switch>
                
            </main>            
            <Footer />
            <TopScroller target="#header"/>
        </Router>
            
        )
       
    }
}

