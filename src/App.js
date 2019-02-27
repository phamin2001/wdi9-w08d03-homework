import React, { Component } from 'react';
import './App.css';
import SearchContainer from './SearchContainer';
import MainContainer from './MainContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      query:'',
      empty: true
    }
  }

 handleSearch = (query) => {
   console.log(query, 'in app.js handleSearch')
   this.setState({
     query: query, 
     empty: false
   })
 }

  render() {
    console.log(this.state, 'in app.js');
    return(
      <div>
        {!this.state.empty ? <MainContainer query={this.state.query}/> : <SearchContainer handleSearch={this.handleSearch}/>}
      </div>
    )
  }
}

export default App;



