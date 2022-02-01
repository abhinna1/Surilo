import shareIco from '../img/shareIco.png'
import love from '../img/love.png'
import playTrack from '../img/playTrack.png'
import lakhau from '../img/lakhau.jpg'
import threeDot from '../img/threeDot.png'


import './SongDisplay.css'

function popDropdown(){
    alert("hoi")
}

const SongDisplay = () => {
    return( 
    <div className="artistMusicCtn">
    <div className='SongList'>
        <div className='trackCtn'>
            <img className='playTrackImg' src={playTrack} alt="" />
            <img className='trackImg' src={lakhau} alt="" />
            <div className='trackInfo'>
                <h6>Lakhau Hajarau</h6>
                <h6>Album Name</h6>
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
    <div className='SongList'>
        <div className='trackCtn'>
            <img className='playTrackImg' src={playTrack} alt="" />
            <img className='trackImg' src={lakhau} alt="" />
            <div className='trackInfo'>
                <h6>Lakhau Hajarau</h6>
                <h6>Album Name</h6>
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
    <div className='SongList'>
        <div className='trackCtn'>
            <img className='playTrackImg' src={playTrack} alt="" />
            <img className='trackImg' src={lakhau} alt="" />
            <div className='trackInfo'>
                <h6>Lakhau Hajarau</h6>
                <h6>Album Name</h6>
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
    <div className='SongList'>
        <div className='trackCtn'>
            <img className='playTrackImg' src={playTrack} alt="" />
            <img className='trackImg' src={lakhau} alt="" />
            <div className='trackInfo'>
                <h6>Lakhau Hajarau</h6>
                <h6>Album Name</h6>
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