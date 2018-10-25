import React from 'react';
import ReactDOM from 'react-dom';
import AddUserPage from '../components/AddUserPage';
import { shallow } from 'enzyme';

describe('Rendering with ReactDOM', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddUserPage
     />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Rendering with shallow(Enzyme)', () => {
  it('renders without crashing', () => {
    shallow(<AddUserPage
     />);
  });
});