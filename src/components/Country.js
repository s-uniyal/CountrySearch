import React from "react";
import styles from '../styles/country.module.css';
const country = (props) => (
  <div className = {styles.Country}>
  <h1>Name: {props.name}</h1>
  <h1>Capital: {props.capital}</h1>
  <h1>Population: {props.population}</h1>
  
  </div>

);

export default country;