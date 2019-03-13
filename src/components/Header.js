import React, { Component } from 'react';
import styles from '../styles/header.module.css';
class Header extends Component {
  render() {
    return(
      <div className={styles.Header}>
      <h1>Country Search</h1>
      <p>Search Countries and their Details</p>
      </div>
    ); 
  }
}

export default Header;