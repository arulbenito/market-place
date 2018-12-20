import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from "../Search/Search";
import Project from "../Project/Project";
import Account from "../Account/Account";
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import ProjectForm from '../ProjectForm/ProjectForm';
import PlaceBid from '../PlaceBid/PlaceBid';

import Logout from '../Logout/Logout'

export default class Main extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={(props) => <Search user={this.props.user} showAll={true} {...props} />} exact />
                <Route path="/search" component={Search} />
                <Route path="/post" component={(props) => <ProjectForm user={this.props.user} {...props} />} />
                <Route path="/project/:id" component={(props) => <Project user={this.props.user} {...props} />} />
                <Route path="/bid/:id" component={(props) => <PlaceBid user={this.props.user} {...props} />} />
                <Route path="/login" component={LoginForm} />
                <Route path="/register" component={RegisterForm} />
                <Route path="/account" component={Account} />
                <Route path="/logout" component={Logout} />
            </Switch>
        );
    }
}
