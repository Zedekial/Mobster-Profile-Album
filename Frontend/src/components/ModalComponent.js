import React from 'react';
import '../CSS/ModalComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Modal = (props) => {
    return (
        <div className="modal__container" onClick={props.handleClosingModal}>
            <div className="modal__container__card" onClick={props.handleModalCardClick}>
                <div className="modal__container__card--image">
                    <img draggable='false' alt={props.name + ' img'} src={props.src}></img>
                </div>
                <FontAwesomeIcon icon="times-circle" className="modal__container__card--button" onClick={props.handleClosingModal} />
                <h2>{props.name}</h2>
                <ul>
                    {/* <li>Phone: {props.phone}</li> */}
                    <li>Email: {props.email}</li>
                    <li>Role: {props.role}</li>
                    <li>Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit.omnis.</li>
                </ul>
                {/* <button className="modal__container__card--button standard__button__style" onClick={props.handleClosingModal}>X</button> */}
            </div>
        </div>
    )
}

export default Modal
