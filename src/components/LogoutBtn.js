import React, { Component } from 'react';
import { logout } from './auth';


class LogoutButton extends Component {
    render() {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
            <button id="logoutButton" type="button" onClick={() => logout('google')} className="logout-btn btn btn-secondary text-center"><p>Logout</p></button>
            </div>
        </div>

    )
    }
}

export default LogoutButton;