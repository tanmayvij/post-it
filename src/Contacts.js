import React, { Component } from 'react';
const contacts = require( './contacts.json');

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts
        }
    }
    render() { 
        return (
            <div className="card p-2" style={{height: 500,overflow: "scroll"}}>
                <h1>Contacts</h1>
                <table className="table">
                {
                    this.state.contacts.filter((contact) => contact.id !== localStorage.getItem("userid")).map(c => (
                        <tr key={c.id}>
                            <td><img className="rounded-circle" src={"https://picsum.photos/200"} height="42" width="42" alt={c.name} /></td>
                            <td><label className="label text-primary">{c.name}</label></td>
                            <td>
                                <button type="button" className="btn" data-toggle="modal" data-target="#chatModal">
                                    <i className="fa fa-commenting-o" aria-hidden="true"></i>
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </table>
                <div className="modal fade" id="chatModal">
                    <div className="modal-dialog card p-3">
                        <div className="modal-header">
                            <h5 className="modal-title">Chat</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <hr />
                            <div className="row">
                                <input type="text" class="col-md-10 form-control" placeholder="Write a message..." />
                                <button className="col-md-2 btn btn-sm btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Contacts;