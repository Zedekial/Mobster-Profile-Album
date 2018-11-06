import React from 'react';
import ReactDOM from 'react-dom';
import ModalContainerComponent from '../components/ModalContainerComponent';
import { shallow } from 'enzyme';

describe('Rendering with ReactDOM', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ModalContainerComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Rendering with shallow(Enzyme)', () => {
  it('renders without crashing', () => {
    shallow(<ModalContainerComponent />);
  });
});
