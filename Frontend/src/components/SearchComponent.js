import React, { Component } from 'react';
import '../CSS/SearchComponent.css';

class SearchComponent extends Component {
  state = {
    searchText: '',
  };

  HandleSearch = (e) => {
    let filteredSearch = FilterSearch(e.target.value).join('');

    this.setState({ searchText: filteredSearch });
  }

  render() {
    return (
      <div>
      <h4>Search by first name, location or email</h4>
      <input onChange={e => this.HandleSearch(e)}></input>
      <h2>Searching for: {this.state.searchText}</h2>
      </div>
    )
  }
}


const FilterSearch = (phrase) => {
  let filteredPhrase = phrase.split('');

  let finalFilter = filteredPhrase.filter(letter => {
    return /^[A-Z]+$|\@/i.test(letter);
  })

  return finalFilter
}

export default SearchComponent
