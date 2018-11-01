import React, { Component } from 'react';
import '../CSS/ModalComponent.css';

function Modal(props){
    return (
        <div className="modal__container">
            <div className="modal__container__card">
                <ul>
                    <li>Name:</li>
                    <li>Phone:</li>
                    <li>email:</li>
                </ul>
                <button onClick={props.handleClosingModal}>CLOSE MODAL</button>
            </div>
           
        </div>
    )
}

export default Modal
