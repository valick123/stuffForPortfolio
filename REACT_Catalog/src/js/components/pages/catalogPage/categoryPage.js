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
        fetch(`${this.props.dbAddress}/products`)
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
            let product = null;
          
        for(let key in this.props.catalog){
            this.props.catalog[key].forEach(item=>{
                if(item.id === +e.target.dataset.productId){
                    product = item;
                }
            })
        }
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
                    
                        <h1>{this.props.match.params.category}</h1>
                        {
                            !this.state.isLoading
                            ?this.props.catalog[this.props.match.params.category].map((item)=>{
                                return (
                                    <Col key={item.id} className="mb-4" md={4} onClick={this.addToBascet}>
                                        <ProductCard info={item}  />
                                    </Col>
                                    )
                            })
                            :<Spinner type="grow" color="primary" />
                        }
                    
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (store) =>{
    return{
        catalog:store.catalogPage.catalogList,
        ...store.bascetPage,
        ...store.main
    }
}

export default connect(mapStateToProps)(CategoryPage)