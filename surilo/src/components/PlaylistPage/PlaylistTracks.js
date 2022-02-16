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

    const [playlistData, setPlaylistData] = useState([]);

    const queryParams = new URLSearchParams(window.location.search)

    const playlistid = `${queryParams.get('playlist')}`;

    

    useEffect(()=>{
        console.log('playlistId: ', playlistid)
        async function getDatas(){
            console.log('fetching')
            let fetchedData = await axios.get(`/getplaylistmusics/${playlistid}`)
            setPlaylistTracks(fetchedData.data)
            

            let fetchedPlaylistData = await axios.get(`/getplaylistdata/${playlistid}`)
            setPlaylistData(fetchedPlaylistData.data)
            console.log('fetched data: ', fetchedPlaylistData.data)
            console.log('in variable: ', playlistData)
        }
        getDatas();
    }, [])
    
    const getPlaylistTrack = ()=>{
        let data = []
        playlistTracks.map((i)=>data.push(<SongDisplay hits = {i}></SongDisplay>))
        return data;
    }

    const getPlaylistName = ()=>{
        let data = []
        playlistData.map((i)=>data.push(<h1>{i['playlist_name']}</h1>))
        return data;
    }

    const getPlaylistCover = ()=>{
        let data = []
        playlistData.map((i)=>data.push(<img src={`./playlist_covers/${i['playlist_cover']}`} alt="" />))
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
                                     {getPlaylistCover()}
                                 </div>
                                 </div>
     
                             <div className="playlistTwo">
                                 <div className="playlistTitle">
                                     {getPlaylistName()}
                                     <h6>{playlistTracks.length} Songs</h6>
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