import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    
    return (
            <div className="container">
                <div className="card-transparent">
                    <ul className="nav flex-column nav-pills">
                        <li>
                            <Link className={"nav-link" + (props.page === "dashboard" ? " active" : "")} style={{color: "white"} } to="/dashboard">Home</Link>
                        </li>
                        <li>
                            <Link className={"nav-link" + (props.page !== "dashboard" ? " active" : "")} style={{color: "white"} } to={"/user?id="+localStorage.getItem("userid")}>My Profile</Link>
                        </li>
                        <li>
                            <Link className="nav-link" style={{color: "white"} } onClick={() => props.onLogout()}>Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
}
 
export default Sidebar;