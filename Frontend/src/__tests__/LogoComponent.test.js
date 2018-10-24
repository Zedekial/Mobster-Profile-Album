import React from 'react';
import ReactDOM from 'react-dom';
import LogoComponent from '../components/LogoComponent';
import { shallow } from 'enzyme';

describe('Rendering with ReactDOM', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LogoComponent
     />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Rendering with shallow(Enzyme)', () => {
  it('renders without crashing', () => {
    shallow(<LogoComponent
     />);
  });
});