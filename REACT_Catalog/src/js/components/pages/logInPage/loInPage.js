import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container,Row, Col, Card } from 'reactstrap';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class LogInPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoged:false,
            userName:'Admin',
            password:"12345"
        }
    }
    logIn=(e)=>{
        e.preventDefault()
        let data = new FormData(e.target)
       if(this.state.userName == data.get('username') && this.state.password == data.get('password') ){
        localStorage.setItem('isLoged', true);
        this.props.dispatch({
            type:"LOG_IN",
            payload: true
        })
        this.setState({
            isLoged:true
        })
       }
    }
    render(){
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        if(this.state.isLoged){
            return <Redirect to={from} />
        }
        return (
            <Container>
                <Row>
                    <Col md={{ size: 4, offset: 4 }}>
                        <Card body outline color="primary">
                            <Form onSubmit={this.logIn}>
                            <FormGroup className="mb-2">
                                <Label for="UserName">User name</Label>
                                <Input type="username" name="username" id="UserName" placeholder="User name" />
                            </FormGroup>
                            <FormGroup className="mb-2">
                                <Label for="Password">Password</Label>
                                <Input type="password" name="password" id="Password" placeholder="Password" />
                            </FormGroup>
                            <Button color="primary">Submit</Button>
                        </Form>
                        </Card>
                        
                    </Col>
                </Row>
            </Container>
            
        )
    }
} 
const mapStateToProps = (store) =>{
    return {
        ...store.logInStatus
    }
}
export default connect(mapStateToProps)(LogInPage)