/**
 * Created by albertogiovanelli on 20/05/18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute = ({
    isAuthenticated,
    component : Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
                <Component {...props}/>
            ) : (
                <Redirect to="/"/>
            )
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.authReducer.isUserLogged
});

export default connect(mapStateToProps)(PrivateRoute);