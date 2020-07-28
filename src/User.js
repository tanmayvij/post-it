import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Sidebar from './Sidebar';
import Contacts from './Contacts';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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



                </div>
                <div className="col-md-3">
                    <Contacts />
                </div>
            </div>
        );
    }
}
 
export default User;