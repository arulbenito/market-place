import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Post from "../Post/Post";
import Search from "../Search/Search";
import Project from "../Project/Project";



export default class Main extends Component {
    render(){
        return(    
        <Switch>
            <Route path="/search" component={Search} />
            <Route path="/post" component={Post} />
            <Route path="/project/:id" component={Project} />
        </Switch>
        );
    }
}
