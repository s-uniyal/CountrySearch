import React, { Component } from 'react';
import Header from "../components/Header";
import Countries from "../components/Countries";


class CountrySearch extends Component {

  render() {
    const style = {
      marginBottom:'50px',
    }
    return (
      <div style={style}>
      <Header />
      <Countries />
      </div>
    )
  }
}

export default CountrySearch;