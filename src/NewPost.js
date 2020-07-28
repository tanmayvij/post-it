import React, { Component } from 'react';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="container card p-3 rounded">
                <form>
                    <div className="form-group">
                        <textarea rows="3" className="form-control" placeholder="Write something..."></textarea>
                    </div>
                    <input type="submit" value="Post" className="btn-primary btn align-center" onClick={() => {
                        
                    }} />
                </form>
            </div>
        );
    }
}
 
export default NewPost;