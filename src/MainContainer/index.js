import React, { Component } from 'react';
import GifsContainer from '../GifsContainer';

class MainContainer extends Component {

    constructor(){
        super();
        this.state={
            gifs:[],
            loading: true
        }
    }

    getGifs = async () => {
        let url = `http://api.giphy.com/v1/gifs/search?q=${this.props.query}&api_key=AxFY9Crnljb7dAS9fql59sjBwQkiu1zj`;
        try {
            const gifs = await fetch(url);
            console.log(gifs, 'json gifs');
            if(!gifs.ok){
                throw Error(gifs.statusText);
            }
            const gifsJson = await gifs.json();
            console.log(gifsJson, 'parsed gifs');
            return gifsJson;
        
        } catch (err) {
            console.log(err, 'error in catch block');
            return err;        
        }
    }

    componentDidMount(){
        this.getGifs().then((data) => {
            this.setState({
                gifs: data,
                loading: false
            })
        })
    }

    render(){
        return(
            <div className="searchcontainer">
                <h1 id="h1">Your search for {this.props.query} gifs:</h1>
                {this.state.loading ? <span>Data is loading...</span> : <GifsContainer gifs={this.state.gifs}/>}
            </div>
        )
    }
}

export default MainContainer;