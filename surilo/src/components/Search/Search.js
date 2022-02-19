import React from 'react';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar'
import LeftSidebar from '../leftSidebar/LeftSidebar';
import PopularArtist from '../Home/playlist/PopularArtist';
import SongDisplay from '../songDisplay/SongDisplay';
import '../Home/homeStyle.css';
import { useState, useEffect } from 'react';
import playerContext from '../PlayerContext/playerContext' 
import axios from 'axios';

const Home = () => {
    
    const [artistDb, setArtistDb] = useState([]);

    const[weeklyHits, setWeeklyHits] = useState([]);
    
    const { songs_list, currentSong, setCurrent } = useContext(playerContext)

    useEffect(async ()=>{
        const queryParams = new URLSearchParams(window.location.search)
        const tag = `${queryParams.get('tag')}`;

        let fetchedData = await axios.get(`/searchartist/${tag}`)
        setArtistDb(fetchedData.data)

        let fetchWeeklyHits = await axios.get(`/searchmusic/${tag}`)
        setWeeklyHits(fetchWeeklyHits.data)
    }, [])




    const getData=(artistDb)=>{

        // Shuffle popular artists
        let currentIndex = artistDb.length,  randomIndex;
      

        // Loop popular artists compnent till array length
        let data = []

        artistDb.map((i)=>data.push(<PopularArtist artists = {i}></PopularArtist>))
        if(data.length){
            return data;
        }
        else{
            return <p>No artist with such name found.</p>
        }
    }

    const getWeeklyHits = ()=>{

        let data = []

        weeklyHits.map((i)=>data.push(<SongDisplay hits = {i}></SongDisplay>))
        if(data.length>0){
            return data;
        }
        else{
            return <p>No Music Found.</p>
        }
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
                        <h6 className='playListTitle'>Artists</h6>
                        <div className='album d-flex'>

                            {getData(artistDb)}
                            </div>

                        </div>
                        <div className="playlist p-3 d-flex flex-wrap">
                            <div className='TrendingTracksCtn'>
                            <h6 className='playListTitle'>Musics</h6>
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