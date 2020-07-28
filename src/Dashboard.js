import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import Wall from './Wall';
import Post from './Post';

export default class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            "redirect": false
        };
    }
    
    componentDidMount() {
        if(!localStorage.getItem("token")) this.setState({"redirect": true});
    }

       render() {
        if(this.state.redirect) {
            return (
                <Redirect to={{
                    pathname: "/"
                }} />
            )
        }
        else return (
           <div align="center">
               <Post />
               <Wall />
           </div>
        )
    }
}