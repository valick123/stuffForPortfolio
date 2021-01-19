import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export default function PrivateRoute ({component:Component, ...rest}){
    return <Route {...rest} render={(props)=>{
        return localStorage.getItem('isLoged') == 'true'? <Component {...props} />: <Redirect to={{
            pathname:'/logIn',
            state:{
                from:props.location
            }
        }} />
    }} />
}
