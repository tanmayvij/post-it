import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            "email": "",
            "password": "",
            "rememberme": false,
            "redirect": false
        }
    }

    doRegister() {
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            body: JSON.stringify({
                "email": this.state.email,
                "password": this.state.password,
                "rememberme": this.state.rememberme
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => response.json())
        .then((response) => {
            if(response.token) {
                localStorage.setItem("token", response.token);
                this.setState({"redirect": true})
            }
            else {
                alert(response.error);
            }
        })
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
           <div>
               <form action="#" className="col-4 auth">
               <h2>Create an account</h2>
                    <div className="form-group">
                        <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} className="form-control" placeholder="Full Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} className="form-control" placeholder="Email Address" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
                    </div>
                    <button onClick={() => this.doRegister() } type="button" className="btn btn-primary">Register</button><br /><br />
                    <Link to="/">Already have an account?</Link>
               </form>
           </div>
        )
    }
}