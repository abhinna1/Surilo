// import { useState } from 'react';

const PopularArtist = (props) => {


    const artists = props.artists;
      
    return ( 
        <div className="artistDisplay d-flex flex-column">
            <div className="coverArt">
                {artists.cover}
            </div>
            <div className="artistName">
                <h6>{artists.name}</h6>
            </div>
        </div>
     );
}
 
export default PopularArtist;