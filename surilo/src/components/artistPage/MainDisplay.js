import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar';
import './MainDisplay.css';
import yabesh from '../img/yabesh.jpg'
import LeftSidebar from '../leftSidebar/LeftSidebar';
import playBtn from '../img/playBtn.png'
import MusicBar from '../musicBar/MusicBar'

import SongDisplay from '../songDisplay/SongDisplay';
import Header from '../songDisplay/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';

const MainDisplay = () => {
    const queryParams = new URLSearchParams(window.location.search)

    const artistId = `${queryParams.get('artist')}`;

    const [artistMusic, setArtistMusic] = useState([]);

    const [artistData, setArtistData] = useState([]);
    const [artistname, setArtistName] = useState('');
    useEffect(()=>{
        async function getDatas(){
            let fetchedData = await axios.get(`/getArtistMusics/${artistId}`)
            setArtistMusic(fetchedData.data)

            let fetchedArtistData = await axios.get(`/getArtistData/${artistId}`)
            setArtistData(fetchedArtistData.data)
        }
        getDatas();
    }, [])

    const getArtistMusic = ()=>{
        let data = []
        artistMusic.map((i)=>data.push(<SongDisplay hits = {i}></SongDisplay>))
        return data;
    }

    const getArtistName = ()=>{
        let data = []
        artistData.map((i)=>data.push(<h1>{i['artist_name']}</h1>))
        return data;
    }

    const getProfilePic = ()=>{
        let data = []
        artistData.map((i)=>data.push(<img src={`./artist_profiles/${i['profile_picture']}`} alt="" />))
        return data;
    }

    return (
       <div className='homeContainer'>
           <div>
               <LeftSidebar></LeftSidebar>
           </div>
                <div className='contentContainer d-flex flex-column'>
                    <Navbar></Navbar>
                    <div className="innerContainer">

                    <div className='artistCtn'>
                            <div className="artistPrf">
                                <div className="one">
                                <div className="artistImage">
                                    {getProfilePic()}
                                </div>
                                </div>
    
                            <div className="two">
                                <div className="artistTitle">
                                    <h1>{getArtistName()}</h1>
                                </div>
                                
                                <div className="artistAction">
                                    <button className="followBtn playall" onClick={()=>{console.log(artistData)}}><img className='playAllBtn' src={playBtn} alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Tableheader'>
                        <Header></Header>
                    </div>
                      <div className='songDisplayCtn'>
                          {getArtistMusic()}
                      {/* <SongDisplay></SongDisplay> */}
                      </div>
                        
                    </div>
                    </div>
                        
                    </div>   

    )
}

export default MainDisplay;