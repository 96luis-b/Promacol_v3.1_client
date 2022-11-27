import React from 'react'
import { Navigate, Route, useLocation } from 'react-router-dom'
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
                    : (<Navigate to={{ pathname: '/login', state: { from: location } }} />)
            }
        </Route>
    )
}