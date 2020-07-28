import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
const posts = require('./posts.json');

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

export default class Wall extends Component {

    constructor() {
        super();
        this.state = {
           "posts": []
        };
    }

    componentDidMount() {
        
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((response) => {
            if(response.length !== 0) {
                this.setState({"posts": response})
            }
        })
    }

    render() {
        return (
           <ul id="wall">
               {
                   posts.map((post) => (
                       <li class="col-6">
                           {post.author} <br />
                           {
                                post.publishedAt.substring(8,10) + " "
                                + months[parseFloat(post.publishedAt.substring(5,7)) - 1] + " "
                                + post.publishedAt.substring(0,4) + " "
                                + post.publishedAt.substring(11,19)
                           }
                           <hr />
                           {post.content}
                           <hr />
                           <div>
                               <button type="button">Like</button>
                           </div>
                        </li>
                   ))
               }
           </ul>
        )
    }
}