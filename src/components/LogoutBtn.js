import React, { Component } from 'react';
import { logout } from './auth';
import { BrowserRouter } from 'react-router-dom';
import { rebase } from './base.js';


class LogoutButton extends Component {
    render() {
    return (
        <div>
            <button type="button" onClick={() => logout('google')} className="logout-btn btn btn-secondary">Log Out</button>
        </div>

    )
    }
}

export default LogoutButton;