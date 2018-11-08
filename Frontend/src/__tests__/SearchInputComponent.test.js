import React from 'react';
import ReactDOM from 'react-dom';
import { SearchInputComponent } from '../components/SearchInputComponent';
import SearchComponent from '../components/SearchComponent';
import { shallow } from 'enzyme';

describe('Rendering with ReactDOM', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchInputComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Rendering with shallow(Enzyme)', () => {
  it('renders without crashing', () => {
    shallow(<SearchInputComponent />);
  });
});

describe('Call the search function on input change or update', () => {
  it('begins as an empty input field', () => {
    const inputBox = shallow(<SearchInputComponent />);

    expect(inputBox.text()).toEqual('');
  })
  it('calls the HandleSearch component and passes it the event object', () => {
    const fakeHandleSearch = jest.fn();

    const searchInput = shallow(<SearchInputComponent HandleSearch={fakeHandleSearch} />);

    searchInput.find('input').simulate('change', { target: 'John Doe' });

    expect(fakeHandleSearch).toBeCalledWith('John Doe')
  })
})
