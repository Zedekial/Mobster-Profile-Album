import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

export const CardDetailsComponent = (props) => {
    const showMore = () => {
        console.log(props);
        console.log(`ID of mobster is ${props.id}`);
    }
    return (
        <div onClick={props.onClick} className={props.className}>
            <h2>{props.name}</h2>
            <ul>
                <li>Phone: {props.phone}</li>
                <li>Email: {props.email}</li>
                <li>Role: {props.role}</li>
            </ul>
                <div className="user__show__more__button" onClick={showMore}>
                    <FontAwesomeIcon icon="eye" className="user__show__more__icon"/> <span>Show more</span>
                </div>
        </div>
        );
    }
