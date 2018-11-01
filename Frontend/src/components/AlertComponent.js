import React from 'react';
import '../CSS/AlertComponent.css';

const AlertComponent = (props) => {
    return (
        <div className={`alert__container alert--${props.className}`}>
            <p>{props.message}</p>
        </div>
    );
}

export default AlertComponent;