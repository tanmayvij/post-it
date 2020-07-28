import React, { Component } from 'react';

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

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div style={{overflow: "scroll", height: 500}} className="mt-4">
                {
                    this.props.posts.map(post => (
                        <div className="card mb-4 p-3">
                        <div className="card-header">
                            <h4 className="card-title">{post.author}</h4>
                            {
                                post.publishedAt.substring(8,10) + " "
                                + months[parseFloat(post.publishedAt.substring(5,7)) - 1] + " "
                                + post.publishedAt.substring(0,4) + " "
                                + post.publishedAt.substring(11,19)
                            }
                        </div>
                        <div className="card-body">
                            {post.content}
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <button className="btn btn-success" type="button">
                                    I like this
                                    <span className="badge badge-light ml-1 mt-2">{Math.floor(Math.random() * 10)}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        );
    }
}
 
export default Post;