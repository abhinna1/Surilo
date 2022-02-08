// import { useState } from 'react';
import { Link } from 'react-router-dom';

const PopularArtist = (props) => {


    const artists = props.artists;
      
    return ( 
        <div className="artistDisplay d-flex flex-column">
            <div className="coverArt">
            <Link to='/artistDisplay'><img src={`./artist_profiles/abhinna.png`} alt="" /></Link>
            </div>
            <div className="artistName">
                <h6>{artists.artist_name}</h6>
            </div>
        </div>
     );
}
 
export default PopularArtist;