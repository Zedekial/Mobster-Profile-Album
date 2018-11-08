import React from 'react';
import '../CSS/ModalComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { number, string, func } from 'prop-types';


const Modal = (props) => {
    return (
        <div className="modal__container" onClick={props.handleClosingModal}>
            <div className="modal__container__card" onClick={props.handleModalCardClick}>
                <div className="modal__container__card--image">
                    <img draggable='false' alt={props.name + ' img'} src={props.src}></img>
                    <h2>{props.name}</h2>
                </div>
                <FontAwesomeIcon icon="times-circle" className="modal__container__card--button " onClick={props.handleClosingModal} />
                <div className="modal__container__card--details">
                    <ul>
                        <li>Email: {props.email}</li>
                        <li>Phone: {props.phone}</li>
                        <li>Role: {props.role}</li>
                        <li>Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit.omnis.</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

Modal.propTypes = {
    id: number,
    src: string,
    name: string.isRequired,
    role: string,
    phone: string,
    email: string,
    handleClosingModal: func,
    handleModalCardClick: func
}

export default Modal
