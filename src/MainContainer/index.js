import React, { Component } from 'react';

class MainContainer extends Component {

    render(){
        console.log(this.props, 'in MainContainer')
        return(
            <div>
                I'm MainContainer
            </div>
        )
    }
}

export default MainContainer;