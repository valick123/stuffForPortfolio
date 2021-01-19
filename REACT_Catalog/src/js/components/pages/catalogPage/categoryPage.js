import React from 'react';
import { Container, Row, Col, Spinner } from 'reactstrap';
import {connect} from 'react-redux'
import ProductCard from './productCard';
class CategoryPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoading:true
        }
    }
    componentDidMount(){
        fetch(`http://localhost:3000/products?productType=${this.props.match.params.category}`)
        .then(response=>response.json())
        .then(data=>{
            this.props.dispatch({
                type:"GET_PRODUCT_LIST",
                payload:data
            })     
            this.setState({
                isLoading:false
            })
        })
        
    }
    addToBascet=(e)=>{
        if(e.target.tagName == 'BUTTON'){
            console.log(e.target.tagName)
            let product = null;
        this.props.catalog.forEach((item)=>{
            if(item.id ==  +e.target.dataset.productId){
                product = item;
                
            }
        })    
         console.log(product);  
        this.props.dispatch({
            type:"ADD_TO_BASCET",
            payload:product
        })
        }
    }
    render(){
        return(
            <Container>
                <Row>
                    <Col md={12} onClick={this.addToBascet}>
                        <h1>{this.props.match.params.category}</h1>
                        {
                            !this.state.isLoading
                            ?this.props.catalog.map((item)=>{
                                return <ProductCard info={item} key={item.id} />
                            })
                            :<Spinner type="grow" color="primary" />
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (store) =>{
    return{
        catalog:store.catalogPage.catalogList,
        ...store.bascetPage
    }
}

export default connect(mapStateToProps)(CategoryPage)