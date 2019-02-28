import React from 'react';

const GifsContainer = (props) => {

    const gifsList = props.gifs.data.map((gif, i) => {
        return (
            <ui key={i}>
                {/* <img src={gif.bitly_url}></img> */}
                {/* <img src={gif.url}></img> */}
                <img src={gif.images.downsized.url}></img>
            </ui>
        )
    })

    
    return(
        <div className="gifsContainer">
            {gifsList}
        </div>
    )
}

export default GifsContainer;