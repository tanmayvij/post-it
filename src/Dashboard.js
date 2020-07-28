import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Sidebar from './Sidebar';
import Contacts from './Contacts';
import Posts from './Posts';
import NewPost from './NewPost';

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

    logout()
    {
        localStorage.clear();
        this.setState({"redirect": true});
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
           <div className="row">
               <div className="col-md-3">
                   <Sidebar onLogout={this.logout.bind(this)} page="dashboard" />
               </div>
               <div className="col-md-6">
                   <NewPost />
                   <Posts posts={require('./posts.json')} />
               </div>
               <div className="col-md-3">
                   <Contacts />
               </div>
           </div>
        )
    }
}