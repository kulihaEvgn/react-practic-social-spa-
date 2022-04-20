import React from 'react'
import { Navigate } from 'react-router-dom'

export const withAutnRedirect = (Component) => {
    const WrapContainer = (props) => {
        if (!props.isLogined) return <Navigate to={'/login'} />
        return <Component {...props} />
    }
    return WrapContainer
}
