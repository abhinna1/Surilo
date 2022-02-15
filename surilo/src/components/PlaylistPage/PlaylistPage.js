import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar'
import LeftSidebar from '../leftSidebar/LeftSidebar';

import './SinglePlaylist.css'

import { useState, useEffect } from 'react';
import SinglePlaylist from './SinglePlaylist';
import driving from '../img/driving.jpg'
import romance from '../img/romanceCover.jpg'
import lofi from '../img/lofi.jpg'



function PlaylistPage(){
    const [playlistDb, setPlaylistDb] = useState([
        {
        p_id:1,
        name:"Driving",
        cover: <img src={driving}/>
    },
    {
        p_id:2,
        name:"Love",
        cover: <img src={romance}/>
    },
    {
        p_id:3,
        name:"Lo-fi",
        cover: <img src={lofi}/>
    }
 ]);

    const getPlaylistData=(playlistDb)=>{

        // Shuffle popular artists
        let currentIndex = playlistDb.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [playlistDb[currentIndex], playlistDb[randomIndex]] = [
            playlistDb[randomIndex], playlistDb[currentIndex]];
        }

        // Loop popular artists compnent till array length
        let data = []

        playlistDb.map((i)=>data.push(<SinglePlaylist playlists = {i}></SinglePlaylist>))
        return data;
    }

    return(
        <div className='homeContainer'>
        <div>
            <LeftSidebar></LeftSidebar>
        </div>
             <div className='contentContainer d-flex flex-column'>
                 <Navbar></Navbar>
                 <div className="innerContainer">

                     <div className="prm-color playlist row">
                     <h6 className='playListTitle'>My Playlist</h6>
                     <div className='PlaylistContainer d-flex'>
                            {getPlaylistData(playlistDb)}
                         
                         </div>

                     </div>
                 </div>

                 </div>
                     
                 </div>  
    )
}

export default PlaylistPage;