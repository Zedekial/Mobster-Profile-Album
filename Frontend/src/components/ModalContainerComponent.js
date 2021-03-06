import { Component } from 'react';
import { createPortal } from 'react-dom';
// import { ModalComponent } from './ModalComponent';

class ModalContainerComponent extends Component {
    render() {
        return createPortal(
            this.props.children,
            document.getElementById('modal-root')
        )
    }
}

export default ModalContainerComponent;


