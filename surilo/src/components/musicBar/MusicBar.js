import './MusicBar.css'
import pause from '../img/pause.png'
import next from '../img/next.png'
import prev from '../img/prev.png'
import shuffle from '../img/shuffle.png'
import repeat from '../img/repeat.png'
import lakhau from '../img/lakhau.jpg'

const MusicBar = () => {

    return (
      <div className='c-containter'>
        <div className='songArt'>
          <div>
          <img src={lakhau} alt="" />
          </div>
          <div className='songInfo'>
          <h4 className='songTitle'>Lakhau Hajarau</h4>
          <h6 className='songTitle'>Yabesh Thapa</h6>
          </div>
          
        </div>


        <div className='musicControlCtn'>
        <h6 className='songTitleSm'>Lakhau Hajarau</h6>
        <div id="seekObjContainer">
            <div id="timeline1">
                <div id="seekObj1" className="playhead"></div>
            </div>
            <div className="musicControl">
            <img src={prev} alt="" />
              <img src={pause} alt="" />
              <img src={next} alt="" />
            </div>
        </div>
        </div>
        <div className='songAction'>
          <img src={shuffle} alt="" />
              <img src={repeat} alt="" />
          </div>
        
        
      </div>
    )
}

export default MusicBar;
