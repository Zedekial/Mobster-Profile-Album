import React, { Component } from 'react';
import { fakeAuth } from './LoginPage';
import { Redirect, Link, Route, Switch } from 'react-router-dom';

export const Admin = () => ( <div> <h2>I am in GOD MODE ADMIN</h2> </div> )

export const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
  )
}
