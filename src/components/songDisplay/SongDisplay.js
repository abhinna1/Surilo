import shareIco from '../img/shareIco.png'
import love from '../img/love.png'
import playTrack from '../img/playTrack.png'
import lakhau from '../img/lakhau.jpg'
import threeDot from '../img/threeDot.png'
import { useState } from 'react'

import './SongDisplay.css'

function popDropdown(){
    alert("hoi")
}

const SongDisplay = (props) => {

    const hits = props.hits;
    return( 
    <div className="artistMusicCtn">
    <div className='SongList'>
        <div className='trackCtn'>
            <button className='playBtn'> <img className='playTrackImg' src={playTrack} alt="" /> </button>
            <img className='trackImg' src={`./album_covers/${hits.cover_image}`} alt="" />
            <div className='trackInfo'>
                <h6>{hits.title}</h6>
                <h6>{hits.album_name}</h6>
                <h6>2:59</h6>
            </div>
            </div>
            <div className='durationCtn'>
                <h5 className='headerTitle'>
                    2:59
                </h5>
            </div>
        <div className='favCtn'>
            <img className='playTrackImg' src={love} alt="" />
        </div>
        <div className='playCtn'><h5 className='headerTitle'>45,695</h5></div>
        <div className='shareCtn'><img src={shareIco} alt="" /></div>
        <div className='threeDotCtn'>
            <img onClick ={() => popDropdown()} src={threeDot} alt="" />
        </div>
    </div>
    
        
</div>
)
}

export default SongDisplay;