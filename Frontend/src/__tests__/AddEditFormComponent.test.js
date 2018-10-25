import React from 'react';
import ReactDOM from 'react-dom';
import AddEditFormComponent from '../components/AddEditFormComponent';
import { shallow } from 'enzyme';

describe('Rendering with ReactDOM', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddEditFormComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Rendering with shallow(Enzyme)', () => {
  it('renders without crashing', () => {
    shallow(<AddEditFormComponent />);
  });
});