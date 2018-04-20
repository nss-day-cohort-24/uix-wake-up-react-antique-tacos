import React, { Component } from 'react';
import { logout } from './auth';


class LogoutButton extends Component {
    render() {
    return (
        <div>
            <div>
            </div>
            <button type="button" onClick={() => logout('google')} className="logout-btn btn btn-secondary">Logout</button>
        </div>

    )
    }
}

export default LogoutButton;