import React from 'react';
import '../CSS/ModalComponent.css';

const Modal = (props) => {
    return (
        <div className="modal__container" onClick={props.handleClosingModal}>
            <div className="modal__container__card" onClick={props.handleModalCardClick}>
                <div class="modal__container__card--image">
                    <img alt={props.name + ' img'} src={props.src}></img>
                </div>
                <h2>{props.name}</h2>
                <ul>
                    {/* <li>Phone: {props.phone}</li> */}
                    <li>Email: {props.email}</li>
                    <li>Role: {props.role}</li>
                    <li>Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit.omnis.</li>
                </ul>
                <button onClick={props.handleClosingModal}>Close</button>
            </div>
        </div>
    )
}

export default Modal
