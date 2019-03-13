import React, { Component } from 'react';
import  styles from './App.module.css';
import CountrySearch from "./containers/CountrySearch";



class App extends Component {
  render() {
    
    return (
      <div className= {styles.App}>
        <CountrySearch />
      </div>
    );
  }
}


export default App;
