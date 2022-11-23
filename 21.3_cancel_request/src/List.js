import React, { Component } from 'react'
import axios from 'axios';

export class List extends Component {

  state = {
    countries:[]
  }

abortController = new AbortController()

componentDidMount(){
     (async ()=> {
       const { data } = await axios.get('https://restcountries.com/v3.1/all', {signal: this.abortController.signal})
      this.setState(
        {countries: data.map((country) => country.name.common).sort()}
    )
      })();
}

componentWillUnmount(){
  this.abortController.abort()
}


  render() {
    return (
      <div>{this.state.countries.map((country) =><div>
          {country}
      </div> )}
      
      </div>
    )
  }
}

export default List