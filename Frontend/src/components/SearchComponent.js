import React, { Component } from 'react';
import "../CSS/SearchComponent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* This debounce function is from 'https://blog.flowandform.agency/debounce-in-react-fc5ed305a0e8' */
const debounce = function (a,b,c) {
  let d,e;
  return function() {
    function h(){
      (d=null,c)||(e=a.apply(f,g))
    }
    var f=this,g=arguments;
    return clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e
  }
}

class SearchComponent extends Component {
  state = {
    searchText: "",
    searching: false,
    filteredData: [],
  };
  /* This function is called when you start typing in the input */
  HandleSearch = debounce((inputText) => {
    /* Filter search phrase (text typed in input) and return the result */
    let filteredSearch = this.FilterSearch(inputText.value).join("");

    if (inputText.value === '') {
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
        let filteredEmptyArrayMobsters = filteredMobsters.length ? filteredMobsters : 'no results';

        this.props.SearchComponentCallBack(filteredEmptyArrayMobsters, this.state.searching, this.state.searchText);
      });
    }
  }, 500);

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
          <input className="standard__input__style" placeholder="Search Mobster" onChange={e => this.HandleSearch(e.target)}/>
          <span className="error__message"></span>
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
