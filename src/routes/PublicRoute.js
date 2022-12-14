import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import useAuth from '../contexts/useAuth'
// import useAuth from '../auth/useAuth'

export default function PublicRoute({ component: Component, ...rest }) {
    const auth = useAuth()

    return (
        <Route {...rest} >
            {
                !auth.isLogged()
                    ? (<Component />)
                    : (<Navigate to="/inicio" />)
            }
        </Route>
    )
}