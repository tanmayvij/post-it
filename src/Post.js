import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';

export default class Post extends Component {

    constructor() {
        super();
        this.state = {
            "postField": ""
        };
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
               <form action="#" className="col-6 post">
                   <h2>Write something...</h2>
                    <div className="form-group">
                        <textarea value={this.state.postField} onChange={(e) => this.setState({postField: e.target.value})} className="form-control" placeholder="What's on your mind?" />
                    </div>
                    <button onClick={() => this.doLogin() } type="button" className="btn btn-primary">Post</button><br /><br />
               </form>
           </div>
        )
    }
}