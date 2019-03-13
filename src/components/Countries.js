import React, { Component } from 'react';
import axios from 'axios';
import Country from '../components/Country';
import styles from '../styles/form.module.css';

class Countries extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countries:[],
      search:'',

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  


  handleChange(e) {
    this.setState({
      search :e.target.value
    })
  
}

  handleSearch(e) {
    e.preventDefault();
    
    
    const input = this.state.search;
      
    axios.get(input)
    .then((res)=>{
      
      this.setState({countries:res.data});
      })
    .catch((e)=> console.log(e))
    }
  
    
  render() {
  
    const countries = this.state.countries.splice(0,6).map(country => {
      return (this.state.search)?<Country className={styles.Countries}
                key={country.numericCode}
                name={country.name}
                capital = {country.capital}
                population={country.population}
              />:null
    }

    );
    return(
      <div >
        <form className = {styles.Form} onSubmit={this.handleSearch}>
          <input type="text" value={this.state.search} onChange = { this.handleChange }  ></input>
          <input type="submit" value="Search"></input>
        </form> 
        {countries}
      </div>
      
    )
    
    }
  }

export default Countries;