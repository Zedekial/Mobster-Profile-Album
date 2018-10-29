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
      this.setState({
        searchText: '',
        searching: false,
      })
    } else {
      this.setState({
        searchText: filteredSearch,
        searching: true
      })
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
    if (this.props.state.loading) {
      return (
        <div className='searchinput'>
          <h1>Loading</h1>
        </div>
      )
    } else {
      let filteredMobsters = FilterMobsterData(this.props.state.data, this.state.searchText);

      return (
        <div className='searchinput'>
          <h4>Search by first name, location or email</h4>
          <input onChange={e => this.HandleSearch(e)} />
          <h2>Searching for: {this.state.searchText}</h2>
          {
            this.state.searching ? (
              this.props.SearchComponentCallBack(filteredMobsters, this.state.searching)

            ) :
              (

                this.props.SearchComponentCallBack(null, this.state.searching)
                // this.props.state.data.map(mobster => {
                //   return (
                //     <DisplayTestData
                //     mobster={mobster}
                //     />
                //   )
                // })
              )
          }
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
  } else if (mobster.email.toLowerCase().includes(searchText.toLowerCase())) {
    return true
  } else {
    return false
  }
}

const DisplayTestData = (props) => {
  return (
    <ul key={props.mobster.name}>
      <li>{props.mobster.id}</li>
      <li>{props.mobster.name}</li>
      <li>{props.mobster.email}</li>
      <li>{props.mobster.image}</li>
    </ul>
  )
}

export default SearchComponent;
