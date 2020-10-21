import React, { Component } from 'react';
import {Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';
import Contacts from './Contacts';
import queryString from 'query-string';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "redirect": false
        }
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
                    <Sidebar page="user" onLogout={this.logout.bind(this)}  />
                </div>
                <div className="col-md-6">
                    <div className="card p-4">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="rounded-circle" src="https://picsum.photos/200" alt="rounded" />
                            </div>
                            <div className="col-md-7">
                                <h1>Tanmay Vij</h1>
                                <h4>tanmayvij@example.com</h4>
                            </div>
                            {
                                localStorage.getItem("userid") === queryString.parse(window.location.href.split("?").pop()).id && (
                                    <div className="col-md-1">
                                        <button type="button" className="btn btn-link">Edit</button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <Contacts />
                </div>
            </div>
        );
    }
}
 
export default User;