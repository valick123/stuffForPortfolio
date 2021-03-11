import React from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, CardFooter, Table, Button, Badge, CardText, CardTitle, Spinner} from 'reactstrap'
import {connect} from 'react-redux'
import Slider from "react-slick";

class ProductPage extends React.Component{
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
                    type:"GET_CURRENT_PRODUCT",
                    payload:{
                        data:data,
                        currentProduct:this.props.match.params.product
                    }
                }) 
                this.setState({
                    isLoading:false
                })
            
           
        })
        
    }
    createTable=()=>{
        let table = [];
        let keyProp = 0
        for(let key in this.props.productInfo.specifications){            
            if(this.props.productInfo.specifications[key]!='' && this.props.productInfo.specifications[key] !=null){
                table.push(
            <tr key={++keyProp}>
                <th scope="row">{`${key}`}</th>
                <td>{`${this.props.productInfo.specifications[key]}`}</td>
            </tr>
            )
            }
        } 
        return(
            <tbody>
              {table}
            </tbody>
        )
    }
    addToBascet=()=>{
        this.props.dispatch({
            type:"ADD_TO_BASCET",
            payload:this.props.productInfo
        })
    }
    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: false,
            autoplay:true,
            autoplaySpeed:2000
          };
        return(
            <Container>
                <Row>
                    <Col md={12}>
                        {
                            !this.state.isLoading
                            ?<Card>
                                <CardHeader>
                                    <CardTitle tag="h1" >{this.props.productInfo.title}</CardTitle>
                                    <Badge color={this.props.productInfo.status=='new'
                                            ?"success"
                                            :this.props.productInfo.status=='sale'
                                            ?"danger"
                                            :this.props.productInfo.status=='top'
                                            ?"primary":
                                            ""}>{this.props.productInfo.status}
                                    </Badge>
                                </CardHeader>
                                <CardBody>
                                    <img src={this.props.productInfo.src} />
                                    
                                    <CardText>{this.props.productInfo.price}</CardText>
                                    <CardText>{this.props.productInfo.full_text}</CardText>
                                    <CardTitle tag="h3" >Photo galerry</CardTitle>
                                    <Slider {...settings}>
                                        {this.props.productInfo.gallery?this.props.productInfo.gallery.map((item,index)=>{
                                            if(item!=""){
                                                return <div key={index}>
                                                <img 
                                                src={item} 
                                                style={{
                                                    height: 200 ,
                                                    wigth:"auto"
                                                }} 
                                                 />
                                            </div>
                                            }
                                        }):null}
                                        </Slider>  
                                        <CardTitle tag="h3" >Characteristics</CardTitle>                     
                                    <Table striped>
                                        {this.createTable()}
                                    </Table>
                                </CardBody>
                                <CardFooter>
                                    <Button color="success" onClick={this.addToBascet}>Add to bascet</Button>
                                </CardFooter>
                        </Card>
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
        productInfo:store.catalogPage.currentProduct,
        ...store.bascetPage,
        ...store.main
    }
}
export default connect(mapStateToProps)(ProductPage)