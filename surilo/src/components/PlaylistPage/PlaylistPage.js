import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar'
import LeftSidebar from '../leftSidebar/LeftSidebar';
import axios from 'axios';
import './SinglePlaylist.css'

import { useState, useEffect } from 'react';
import SinglePlaylist from './SinglePlaylist';
import driving from '../img/driving.jpg'
import romance from '../img/romanceCover.jpg'
import lofi from '../img/lofi.jpg'





function PlaylistPage(){
    const queryParams = new URLSearchParams(window.location.search)
    const playlistId = `${queryParams.get('playlist')}`;

    const [playlistDb, setPlaylistDb] = useState([]);

    useEffect(async ()=>{
        const user = JSON.parse(localStorage.getItem('user'));

        if(user!=null){
            console.log('ye')
            let fetchedData = await axios.post(`/getplaylists`, {user: user.id})
            setPlaylistDb(fetchedData.data)
            console.log(playlistDb)
        }
        else{
            console.log('login first!')
        }

    }, [])

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