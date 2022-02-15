import Header from "../songDisplay/Header"
import SongDisplay from "../songDisplay/SongDisplay";
import React from 'react';
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar'
import LeftSidebar from '../leftSidebar/LeftSidebar';

import driving from '../img/driving.jpg'
import axios from 'axios';


import playBtn from '../img/playBtn.png'

function PlaylistTracks(){

    const [playlistTracks, setPlaylistTracks] = useState([]);


    // useEffect(()=>{
    //     async function getDatas(){
    //         let fetchedData = await axios.get(`/getArtistMusics/1`)
    //         setPlaylistTracks(fetchedData.data)
    //     }
    //     getDatas();
    // }, [])
    
    const getPlaylistTrack = ()=>{
        let data = []
        playlistTracks.map((i)=>data.push(<SongDisplay tracks = {i}></SongDisplay>))
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
                             <div className="playlistPrf">
                                 <div className="playlistOne">
                                 <div className="playlistImage">
                                     <img src={driving} alt="" />
                                 </div>
                                 </div>
     
                             <div className="playlistTwo">
                                 <div className="playlistTitle">
                                     <h1>Driving Playlist</h1>
                                     <h6>23 Songs</h6>
                                 </div>
                                
                                 <div className="artistAction">
                                     <button className="followBtn playall"><img className='playAllBtn' src={playBtn} alt="" /></button>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className='Tableheader'>
                         <Header></Header>
                     </div>
                       <div className='songDisplayCtn'>
                           
                       {getPlaylistTrack()}
                       </div>
                         
                     </div>
                     </div>
                         
                     </div>   
 
     )
}

export default PlaylistTracks