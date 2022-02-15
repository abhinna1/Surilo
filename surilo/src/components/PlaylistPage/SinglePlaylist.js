import './SinglePlaylist.css'
import { Link } from 'react-router-dom';

function SinglePlaylist(props){

    const playlists = props.playlists;
    return (
    <div className='singlePlaylist d-flex flex-column'>
        <div className='playlistCov'>
            <Link className='plink' to='/playlistTrack'>{playlists.cover}</Link>
        </div>


        <h6>{playlists.name}</h6>

    </div>

    
    )
}

export default SinglePlaylist