import './SinglePlaylist.css'
import { Link } from 'react-router-dom';

function SinglePlaylist(props){

    const playlists = props.playlists;
    return (
    <div className='singlePlaylist d-flex flex-column'>
        <div className='playlistCov'>
            <Link className='plink' to={`/playlistTrack?playlist=${playlists.playlist_id}`}><img src={`./playlist_covers/${playlists.playlist_cover}`} alt="" /></Link>
        </div>


        <h6>{playlists.playlist_name}</h6>

    </div>

    
    )
}

export default SinglePlaylist