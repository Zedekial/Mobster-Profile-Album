import React from 'react';
import '../CSS/AlertComponent.css';

const AlertComponent = (props) => {
    console.log(props.data);
    return (
        <div className={`alert__container alert--${props.className}`}>
            <p>{props.message}</p>
            {
                props.data &&
                <ul>
                    <li><b>Name: </b>{props.data.name}</li>
                    <li><b>Email: </b>{props.data.email}</li>
                    <li><b>Phone: </b>{props.data.phone}</li>
                    <li><b>Role: </b>{props.data.role}</li>
                    <li><b>Filename: </b>{props.data.src.split('/').pop()}</li>
                </ul>

            }
        </div>
    );
}

export default AlertComponent;