import React from 'react';
import './app.css';

let User= (props) => {
    return(
        <div className="userContainer d-flex justify-content-center align-items-center">
                <p  id="greeting" className="col-4 text-center">Hello, </p>
                <img id="userImage" className="" src={props.Image} alt="Your Picture" />
                <p  id="greeting" className="col-4 text-center">{props.name}</p>
        </div>
    )
}

export default User;