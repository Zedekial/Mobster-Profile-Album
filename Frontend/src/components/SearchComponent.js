import React, { Component } from "react";
import "../CSS/SearchComponent.css";

class SearchComponent extends Component {
  state = {
    searchText: "",
    searching: false,
    filteredData: [],
  };

  /* This function is called when you start typing in the input */
  HandleSearch = e => {
    /* Filter search phrase (text typed in input) and return the result */
    let filteredSearch = this.FilterSearch(e.target.value).join("");
    let searchInput = document.getElementsByClassName('searchinput')[0];

    if (this.props.state.invalidSearch) {
      console.log(`invalidSearch is true, ${this.props.state.invalidSearch}`)
      searchInput.classList.add('invalid-search');
    } else {
      searchInput.classList.remove('invalid-search')
    }

    if (e.target.value === '') {
      this.setState({
        searchText: '',
        searching: false,
      })
    } else {
      if (this.state.searching) {
        let filteredMobsters = FilterMobsterData(this.props.state.data, this.state.searchText);

        this.setState({
          searchText: filteredSearch,
        })
        this.props.SearchComponentCallBack(filteredMobsters, this.state.searching)
      } else if (this.state.searching === false) {
        this.setState({
          searchText: filteredSearch,
          searching: true
        })
        
        this.props.SearchComponentCallBack(null, this.state.searching)
      }
    }
  };

  FilterSearch = searchPhrase => {
    let filteredSearchPhrase = searchPhrase.split("");
    let finalFilteredPhrase = filteredSearchPhrase.filter(letter => {
      return /^[A-Z]+$|\@/i.test(letter);
    });
    return finalFilteredPhrase;
  };

  render() {
    console.log(this.state.searchText)
    if (this.props.state.loading) {
      return (
        <div className='searchinput'>
          <h1>Loading</h1>
        </div>
      )

    } else {
      return (
        <div className='searchinput'>
          <h4>Search by first name, location or email</h4>
          <input onChange={e => this.HandleSearch(e)} />
        </div>
      );
    }
  }

}

const FilterMobsterData = (mobsterData, searchText) => {
  if(searchText === '') {
    console.log(`Searchtext is empty, this could be because of numbers or symbols`)
    return 'Invalid Data'
  } else {
    return mobsterData.filter(mobster =>
      MatchAgainstSearchText(mobster, searchText)
    )
  }
}

const MatchAgainstSearchText = (mobster, searchText) => {
  if (mobster.name.toLowerCase().includes(searchText.toLowerCase())) {
    return true
  } else if (mobster.email.toLowerCase().includes(searchText.toLowerCase())) {
    return true
  } else {
    return false
  }
}

export default SearchComponent;
