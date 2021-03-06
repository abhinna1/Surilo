import shareIco from '../img/shareIco.png'
import playTrack from '../img/playTrack.png'
import threeDot from '../img/threeDot.png'
import './SongDisplay.css'
import playerContext from '../PlayerContext/playerContext' 
import { useContext, useState } from 'react'







const SongDisplay = (props) => {
    const hits = props.hits;
    
    const [dur, setDur] = useState(new Audio(`./Music_Uploads/${hits.file}`));

    const { songslist, currentSong, setCurrent, setSong, audio} = useContext(playerContext)

    async function handlePlay(){
        setSong(hits);
        setCurrent(currentSong+1)
        audio.current.pause();
        setCurrent(currentSong+1);
        await audio.current.load();
        audio.current.play();
    }
    
    return( 
    <div className="artistMusicCtn">
    <div className='SongList'>
        <div className='trackCtn'>
            <button className='playBtn' onClick={handlePlay}> <img className='playTrackImg' src={playTrack} alt="" /> </button>
            <img className='trackImg' src={`./album_covers/${hits.cover_image}`} alt="" />
            <div className='trackInfo'>
                <h6>{hits.title}</h6>
                <h6>{hits.album_name}</h6>
            </div>
            </div>

        <div className='shareCtn'>
            <button className='threeDot'>
                    <img src={threeDot} alt="" />
            </button>
        </div>
    </div>
    
        
</div>
)
}

export default SongDisplay;