import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Search from "../Search/Search";
import Project from "../Project/Project";
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import ProjectForm from '../ProjectForm/ProjectForm';
import Logout from '../Logout/Logout'

export default class Main extends Component {
    render(){
        return(    
        <Switch>
            <Route path="/search" component={Search} />
            <Route path="/post" component={ProjectForm} />
            <Route path="/project/:id" component={Project} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/logout" component={Logout} />

        </Switch>
        );
    }
}
