import './MusicBar.css'
import pause from '../img/pause.png'
import playIco from '../img/playIco.png'
import next from '../img/next.png'
import prev from '../img/prev.png'
import shuffle from '../img/shuffle.png'
import repeatimg from '../img/repeat.png'
import lakhau from '../img/lakhau.jpg'
import React, {useState, useRef, useContext, useEffect} from 'react'
import playerContext from '../PlayerContext/playerContext'
import VolumeSlider from '../VolumeSlider/VolumeSlider'
import volume from '../img/volume.png'

const playBtn = require('../img/playIco.png')
const pauseBtn = require('../img/pause.png')
const actBtn = { playBtn, pauseBtn }

export default function MusicBar(){
  const [isShown, setIsShown] = useState(false);

  const{
    currentSong,
    songslist,
    repeat,
    random,
    playing,
    audio,
    setSong,
    prevSong,
    setCurrent,
    togglePlaying,
    toggleRandom,
    toggleRepeat,
    handleEnd,
    setRef

  } = useContext(playerContext);
    const [percent, setPercent] = useState(0);
    const audioRef = audio;
    const [ppbtn,setPpbutton] = useState(actBtn.playBtn)
    


  // Toggle pause and play
  function togglePlay(e){
    const audio = audioRef.current;
    
    // audio.currentTime=260;
    if(!playing){
      audio.play()
      togglePlay();
    }
    else{
      audio.pause();
      togglePlay();
     
    }
    
  }

  function onChange(e){
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    setPercent(+percent)
    let inp = document.getElementById('seekObj1')
    inp.value = percent;

  }

  function handlePlay(){
    // audioRef.current.play()

    if(audioRef.current.paused){
      audioRef.current.play()
      setPpbutton(actBtn.pauseBtn)
    }
    else{
      audioRef.current.pause()
      setPpbutton(actBtn.playBtn)
    }
    togglePlaying();  
  }

  async function handleNext(){
    setPercent(0)
    if(currentSong<songslist.length-1){
      audioRef.current.pause();
      setCurrent(currentSong+1);
      await audioRef.current.load();
      audioRef.current.play();
    }
    else{
      setCurrent(0);
    }
  }

  async function handlePrev(){
    setPercent(0)
    if(currentSong!=0){
      audioRef.current.pause();
      setCurrent(currentSong-1);
      await audioRef.current.load();
      audioRef.current.play();
    }
    else{
      setCurrent(0);
    }
  }

  function seek(e){
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercent(e.target.value)
  }


    return (
      <div className='c-containter'>
        <div className='songArt'>
          <div>
            <img src={`./album_covers/${songslist[currentSong].cover_image}`} alt="" />
          </div>
          <div className='songInfo'>
            <h4 className='songTitle'>{songslist[currentSong].title}</h4>
            <h6 className='songTitle'>{songslist[currentSong].album_name}</h6>
          </div>
        </div>
        <div className='musicControlCtn'>
          <div id="seekObjContainer">
              <div id="timeline1">
                  <input type="range" id="seekObj1" step='0.01' onChange={seek} value={percent}/>
              </div>
              </div>
          <h6 className='songTitleSm'>{songslist[currentSong].title}</h6>
              
              <audio ref={audioRef} src={`./Music_Uploads/${songslist[currentSong].file}`} paused='true' onLoad={()=>{console.log('loaded')}} onTimeUpdate={onChange} onEnded={handleNext}></audio>
              <div className="musicControl">
                <button onClick={handlePrev}><img src={prev} alt="" /></button>
                <button onClick={()=>handlePlay()}><img src={ppbtn} alt="" /></button>
                <button onClick={handleNext}><img src={next} alt="" /></button>
              </div>
        
        </div>


      <div className='volumeCtn d-flex align-items-center justify-content-center'>
        <button onClick={()=>setIsShown(!isShown)} >
          <img src={volume} alt="" />
        </button>

      </div>
      {isShown && (
        <div className='SliderCtn'>
          <VolumeSlider></VolumeSlider>
        </div>
      )}
      <div className='songAction'>
        <img src={shuffle} alt=""/>
        <img src={repeatimg} alt="" />
      </div>
      
      
    </div>
  )
}


