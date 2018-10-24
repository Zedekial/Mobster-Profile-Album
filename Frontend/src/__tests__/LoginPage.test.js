import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from '../components/LoginPage';
import { shallow } from 'enzyme';

describe('Rendering with ReactDOM', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginPage />, div);
    ReactDOM.unmountComponentAtNode(div)
  });
});

describe('Rendering with shallow(Enzyme)', () => {
  it('renders without crashing', () => {
    shallow(<LoginPage />);
  });
});