import React, { Component } from "react";
import "../CSS/SearchComponent.css";

var mobsters = [
  {
    id: 1,
    name: "Irina",
    email: "inicula@gmail.com",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
  },
  {
    id: 2,
    name: "David",
    email: "dgarrood@gmail.com",
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
  },
  {
    id: 7,
    name: "Damon",
    email: "dmon@gmail.com",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
  },
];

class SearchComponent extends Component {
  state = {
    searchText: "",
    searching: false,
    data: mobsters,
  };

  /* This function is called when you start typing in the input */
  HandleSearch = e => {
    /* Filter search phrase (text typed in input) and return the result */
    let filteredSearch = this.FilterSearch(e.target.value).join("");

    if(e.target.value === '') {
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
    let filteredMobsters = FilterMobsterData(this.state);

    return (
      <div>
        <h4>Search by first name, location or email</h4>
        <input onChange={e => this.HandleSearch(e)} />
        <h2>Searching for: {this.state.searchText}</h2>
        {
          this.state.searching ? (
            filteredMobsters.map(mobster => {
              return (
                <DisplayTestData
                  mobster={mobster}
                />
              )
            })
          ) :
          (
            this.state.data.map(mobster => {
              return (
                <DisplayTestData
                mobster={mobster}
                />
              )
            })
          )
        }
      </div>
    );
  }
}

const FilterMobsterData = (props) => {
  let allProps = {...props}
  return allProps.data.filter(mobster =>
    MatchAgainstSearchText(allProps, mobster)
  )
}

const MatchAgainstSearchText = (props, mobster) => {
  if(mobster.name.toLowerCase().includes(props.searchText.toLowerCase())) {
    return true
  }else if(mobster.email.toLowerCase().includes(props.searchText.toLowerCase())) {
    return true
  }else {
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
