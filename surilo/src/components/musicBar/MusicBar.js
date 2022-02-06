import './MusicBar.css'
import pause from '../img/pause.png'
import volumeup from '../img/high-volume.png'
import volumedown from '../img/volume-down.png'
import next from '../img/next.png'
import prev from '../img/prev.png'
import shuffle from '../img/shuffle.png'
import repeat from '../img/repeat.png'
import lakhau from '../img/lakhau.jpg'
import React, {useRef, useState} from 'react'
import song1 from '../music/song1.mp3'
import song2 from '../music/song2.mp3'


export default function MusicBar(){
    const [current, setCurrent] = useState([{title:'Pretty Girl', artist:'Nirvish', file: song1}, {title:'Kho Gaye Hum Kahan?', artist:'Prateek Kuhad', file: song2}]);
    const[index, setIndex] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [percent, setPercent] = useState(0);
    const [volume, setVolume] = useState(50);
    const audioRef = useRef();
    console.log(index)


  // Toggle pause and play
  function togglePlay(e){
    const audio = audioRef.current;
    // audio.currentTime=260;
    if(!playing){
      audio.play()
      setPlaying(true);
    }
    else{
      audio.pause();
      setPlaying(false);
    }
    
  }

  function onChange(e){
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    setPercent(+percent)
    let inp = document.getElementById('seekObj1')
    inp.value = percent;
    if(audioRef.current.ended){
      onNext()
    }
  }

  async function onNext(){
    const audio = audioRef.current;
    setPercent(0);
    try{
        audio.pause();
        setIndex(index+1);
        audio.src = current[index].file;
        await audio.load();
        audio.play();
    }
    catch(e){
      audio.pause();
      setIndex(index-1);
      audio.src = current[index].file;
      await audio.load();
      audio.play();
    }
  }

 // volume function
  function adjustVolume(e){
    const audio = audioRef.current;
    audio.volume = e.target.value;

  }

  function seek(e){
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercent(e.target.value)
  }
  async function onPrev(){
    const audio = audioRef.current;
    if(index<current.length){
      audio.pause();
      setIndex(index-1);
      audio.src = current[index].file;
      await audio.load();
      audio.play();
    }
    else{
      setIndex(0);
    }
  }
  
  return (
    <div className='c-containter'>
      <div className='songArt'>
        <div>
          <img src={lakhau} alt="" />
        </div>
        <div className='songInfo'>
          <h4 className='songTitle'>{current[index].title}</h4>
          <h6 className='songTitle'>{current[index].artist}</h6>
        </div>
      </div>
      <div className='musicControlCtn'>
        <h6 className='songTitleSm'>{current[index].title}</h6>
        <div id="seekObjContainer">
            <div id="timeline1">
                <input type="range" id="seekObj1" step='0.01' onChange={seek}/>
            </div>
            <audio ref={audioRef} src={current[index].file}onTimeUpdate={onChange} name={current[index].title}></audio>
            <div className="musicControl">
              <button onClick={onPrev}><img src={prev} alt="" /></button>
              <button onClick={()=>togglePlay()}><img src={pause} alt="" /></button>
              <button onClick={onNext}><img src={next} alt="" /></button>
            </div>
        </div>
      </div>
      
      <div className="volumeControl">

        <input 
         className="volumebar"
         type="range" 
         value ={vol}
         onChange={() =>adjustVolume()}
         min={0} 
         max={1}
         />
          <img onClick={()=> vol < 1 && adjustVolume(vol + 0.1)} src={volumeup} alt=""/>
        
        
      </div>
      <div className='songAction'>
        <img src={shuffle} alt=""/>
        <img src={repeat} alt="" />
      </div>
      
      
    </div>
  )
}


