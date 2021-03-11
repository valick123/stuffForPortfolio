import React from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom'
import HomePage from './pages/homePage/homePage';
import CatalogPage from './pages/catalogPage/catalogPage';
import NotFoundPage from './pages/notFoundPage/notFoundPage';
import BascetPage from './pages/bascetPage/bascetPage';
import LogInPage from './pages/logInPage/loInPage';
import PostPage from './pages/homePage/PostPage';
import NewsPage from './pages/homePage/NewsPage';
import CategoryPage from './pages/catalogPage/categoryPage';
import ProductPage from './pages/catalogPage/productPage';
import PrivateRoute from './privateRoute';

const repoName = "/repo-name/";

export default class App extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        localStorage.clear()
        localStorage.setItem('isLoged', false)        
    }
    render(){
       console.log(process.env.NODE_ENV) 
        
        return ( 
        <Router basename={process.env.NODE_ENV==="development"?null:repoName}>
            <Header />
            <main className='main'>
                <Switch>
                    <Route exact path = "/" component={HomePage} />  
                    <Route path ="/post/:id" component = {PostPage} />  
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
        </Router>
            
        )
       
    }
}

