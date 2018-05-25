/**
 * Created by albertogiovanelli on 20/05/18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

export const PublicRoute = ({
    isAuthenticated,
    component : Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
                <Redirect to="/dashboard"/>
            ) : (
                <Component {...props}/>
            )
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.isUserLogged
});

export default connect(mapStateToProps)(PublicRoute);