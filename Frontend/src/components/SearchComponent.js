import React, { Component } from "react";
import "../CSS/SearchComponent.css";

var mobsters = [
  {
    id: 1,
    name: "Irina",
    email: "irina@gmail.com",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
  },
  {
    id: 2,
    name: "David",
    email: "david@gmail.com",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
  },
  {
    id: 3,
    name: "Cezary",
    email: "cezary@gmail.com",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
  },
  {
    id: 4,
    name: "Rogier",
    email: "rogier@gmail.com",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
  },
  {
    id: 5,
    name: "Pedro",
    email: "pedro@gmail.com",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
  },
  {
    id: 6,
    name: "Monica",
    email: "monica@gmail.com",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
  }
];

class SearchComponent extends Component {
  state = {
    searchText: ""
  };

  HandleSearch = e => {
    let filteredSearch = this.FilterSearch(e.target.value).join("");
    this.setState({ searchText: filteredSearch });
  };

  FilterSearch = phrase => {
    let filteredPhrase = phrase.split("");
    let finalFilter = filteredPhrase.filter(letter => {
      return /^[A-Z]+$|\@/i.test(letter);
    });
    return finalFilter;
  };

  render() {
    return (
      <div>
        <h4>Search by first name, location or email</h4>
        <input onChange={e => this.HandleSearch(e)} />
        <h2>Searching for: {this.state.searchText}</h2>
      </div>
    );
  }
}

export default SearchComponent;
