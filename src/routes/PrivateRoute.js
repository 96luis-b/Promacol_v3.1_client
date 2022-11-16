import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'
// import useAuth from '../auth/useAuth'
import useAuth from '../contexts/useAuth'


export default function PrivateRoute({ component: Component, ...rest }) {
    const auth = useAuth()
    const location = useLocation()
    console.log("component: ", <Component/>)
    return (
        <Route {...rest} >
            {
                auth.isLogged()
                    ? (<Component />)
                    : (<Redirect to={{ pathname: '/login', state: { from: location } }} />)
            }
        </Route>
    )
}