/**
 * Created by albertogiovanelli on 20/05/18.
 */
import React, {Component} from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../scenes/LoginPage/LoginPage';
import Dashboard from '../scenes/Dashboard/Dashboard';
import NotFoundPage from '../scenes/NotFoundPage/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import UserPage from '../scenes/UserPage/UserPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/profile" component={UserPage} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;