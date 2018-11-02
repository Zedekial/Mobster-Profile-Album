import React from 'react';
import '../CSS/ModalComponent.css';

const Modal = (props) => {
    return (
        <div className="modal__container">
            <div className="modal__container__card">
                <img alt={props.name + ' img'} src={props.src}></img>
                <h2>{props.name}</h2>
                <ul>
                    {/* <li>Phone: {props.phone}</li> */}
                    <li>Email: {props.email}</li>
                    <li>Role: {props.role}</li>
                </ul>
                <p>Bio:</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.omnis.</p>
                <button onClick={props.handleClosingModal}>Close</button>
            </div>

        </div>
    )
}

export default Modal
