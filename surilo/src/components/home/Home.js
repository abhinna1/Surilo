import React from 'react';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar'
import LeftSidebar from '../leftSidebar/LeftSidebar';
import PopularArtist from './playlist/PopularArtist';
import SongDisplay from '../songDisplay/SongDisplay';
import './homeStyle.css';
import { useState, useEffect } from 'react';
import playerContext from '../PlayerContext/playerContext' 
import PlaylistCarousel from './playlistCarousel';
import axios from 'axios';

const Home = () => {
    
    const [artistDb, setArtistDb] = useState([]);

    const[weeklyHits, setWeeklyHits] = useState([]);
    
    const { songs_list, currentSong, setCurrent } = useContext(playerContext)

    useEffect(async ()=>{
        let fetchedData = await axios.get(`/getpopularartist`)
        setArtistDb(fetchedData.data)

        let fetchWeeklyHits = await axios.get(`/getweeklyhits`)
        setWeeklyHits(fetchWeeklyHits.data)
    }, [])


    const getData=(artistDb)=>{

        // Shuffle popular artists
        let currentIndex = artistDb.length,  randomIndex;
      

        // Loop popular artists compnent till array length
        let data = []

        artistDb.map((i)=>data.push(<PopularArtist artists = {i}></PopularArtist>))
        return data;
    }

    const getWeeklyHits = ()=>{

        let data = []

        weeklyHits.map((i)=>data.push(<SongDisplay hits = {i}></SongDisplay>))
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

                        <div className="playlist row">
                        <h6 className='playListTitle'>Recently Added Artist</h6>
                        <div className='album d-flex'>

                            {getData(artistDb)}
                            </div>

                        </div>
                        <div className="playlist p-3 d-flex flex-wrap">
                            <div className='CarouselCtn'>
                                <PlaylistCarousel></PlaylistCarousel>
                            </div>
                            <div className='TrendingTracksCtn'>
                            <h6 className='playListTitle l-padding'>Recently Added Songs</h6>
                            <div className="trendList">
                                {getWeeklyHits(weeklyHits)}
                            </div>
                            </div>
                            
                        </div>

                    </div>

                    </div>
                        
                    </div>   


           
     );
}
 
export default Home;