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
    let searchInput = document.getElementsByClassName('searchinput')[0];

    if(isInvalid) {
      searchInput.classList.add('invalid-search');
    }else {
      searchInput.classList.remove('invalid-search');
    }
  }

  FilterSearch = searchPhrase => {
    let filteredSearchPhrase = searchPhrase.split("").filter(letter => {
      return /^[A-Z]+$|\@/i.test(letter);
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
  // if(searchText === '') {
  //   return 'Invalid Data'
  // } else {
    return mobsterData.filter(mobster =>
      MatchAgainstSearchText(mobster, searchText)
    )
  // }
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
