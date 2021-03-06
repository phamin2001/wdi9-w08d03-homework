import React, { Component } from 'react';

class SearchContainer extends Component {
    constructor(){
        super();
        this.state = {
            query:''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleQuery = (e) => {
        e.preventDefault();
        this.props.handleSearch(this.state.query);
    }

    render(){
        console.log(this.state, 'query');
        return(
            <form className="ui_input" onSubmit={this.handleQuery}>
                <input id="input" type="search" name="query" placeholder="Search..." onChange={this.handleInput}/><br/>
                <button id="button" color='yellow' sie="medium" type='submit' value='submit'>Search</button>
            </form>
        )
    }
}

export default SearchContainer;