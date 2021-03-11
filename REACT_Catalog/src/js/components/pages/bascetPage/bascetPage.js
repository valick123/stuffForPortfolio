import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {connect} from 'react-redux'
import BascetProductCard from './bascetProductCard';

 class BascetPage extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        if(this.props.bascetList.length == 0){
             fetch(`${this.props.dbAddress}/products`)
            .then(responce => responce.json())
            .then(data=>{
                this.props.dispatch({
                    type:"GET_DEFAULT_ITEMS",
                    payload:data
                })
            })
        }
       
    }
    deletefromBascet = (e) =>{
        this.props.dispatch({
            type:'DELETE_FROM_BASCET',
            payload:e.target.dataset.productId
        })
    }
    render(){
        return(
            <Container>
                <Row>
                    <Col md={12} onClick={this.deletefromBascet}>
                        {this.props.bascetList.length
                        ?this.props.bascetList.map((item,index)=>{
                            console.log(index)
                            return <BascetProductCard info = {item} ket={index} />
                        })
                        :<p>Bascet is empty</p>}
                    </Col>
                </Row>
            </Container>
        )
    }
}
const mapStateToProps =(store)=>{
    return{
        ...store.bascetPage,
        ...store.main
    }
}

export default connect(mapStateToProps)(BascetPage);