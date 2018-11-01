import React, { Component } from 'react';
import {SearchInputComponent} from './SearchInputComponent';
import "../CSS/SearchComponent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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


    if (e.target.value === '') {
      this.HandleInvalidSearch(false);
      this.setState({
        searchText: '',
        searching: false,
      }, () => {
        this.props.SearchComponentCallBack(null, this.state.searching);
      })
    } else {
      this.setState({
        searchText: filteredSearch,
        searching: true,
      }, () => {
        let filteredMobsters = FilterMobsterData(this.props.state.data, this.state.searchText);
        this.props.SearchComponentCallBack(filteredMobsters, this.state.searching);
      });

    }


  };

  HandleInvalidSearch = (isInvalid) => {
    let searchInput = document.getElementsByClassName('standard__input__style')[0];
    let searchIcon = document.getElementsByClassName('search__icon')[0];
    if (isInvalid) {
      searchInput.classList.add('search__user__input--invalid');
      searchIcon.classList.add('search__user__input--invalid');
    } else {
      searchInput.classList.remove('search__user__input--invalid');
      searchIcon.classList.remove('search__user__input--invalid');
    }
  }

  FilterSearch = searchPhrase => {
    let filteredSearchPhrase = searchPhrase.split("").filter(letter => {
      return /^[A-Z]+$/i.test(letter);
    });

    if (filteredSearchPhrase.length === 0) {
      this.HandleInvalidSearch(true);
    } else {
      this.HandleInvalidSearch(false);
    }
    return filteredSearchPhrase;
  };

  render() {
    if (this.props.state.loading) {
      return (
        null
      )
    } else {
      return (
        <div className='search__user__input'>
          <FontAwesomeIcon className="search__icon" icon="search" />
          <SearchInputComponent HandleSearch={this.HandleSearch}/>
          <span className="errorMessage"></span>
        </div>
      );
    }
  }
}

const FilterMobsterData = (mobsterData, searchText) => {
  return mobsterData.filter(mobster =>
    MatchAgainstSearchText(mobster, searchText)
  )
}

const MatchAgainstSearchText = (mobster, searchText) => {
  if (mobster.name.toLowerCase().includes(searchText.toLowerCase())) {
    return true
  } else if (mobster.email.replace('@email.com', '').replace('@mobiquity.com', '').toLowerCase().includes(searchText.toLowerCase())) {
    return true
  } else {
    return false
  }
}

export default SearchComponent;
