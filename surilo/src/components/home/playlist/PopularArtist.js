// import { useState } from 'react';
import { Link } from 'react-router-dom';

const PopularArtist = (props) => {


    const artists = props.artists;
      
    return ( 
        <div className="artistDisplay d-flex flex-column">
            <div className="coverArt">
            <Link to='/artistDisplay'>{artists.cover}</Link>
            </div>
            <div className="artistName">
                <h6>{artists.name}</h6>
            </div>
        </div>
     );
}
 
export default PopularArtist;