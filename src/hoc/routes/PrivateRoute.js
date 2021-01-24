import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={({ location }) => {
      return fakeAuth.isAuthenticated === true
        ? Component
        : <Redirect to={{
            pathname: '/login',
            state: { from: location }
          }} />
    }} />
  )
}

export default PrivateRoute
