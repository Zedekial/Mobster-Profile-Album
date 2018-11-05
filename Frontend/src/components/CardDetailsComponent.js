import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CardDetailsComponent = (props) => {
    return (
        <div className={props.className} onClick={props.toggleCard}>
            <h2>{props.name}</h2>
            <ul>
                <li>Phone: {props.phone}</li>
                <li>Email: {props.email}</li>
                <li>Role: {props.role}</li>
            </ul>
            <div className="user__show__more__button" onClick={props.handleClick}>
                <FontAwesomeIcon icon="eye" className="user__show__more__icon" /> <span>Show more</span>
            </div>
        </div>
    );
}
