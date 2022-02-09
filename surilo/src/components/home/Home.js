import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar'
import PopularArtist from './playlist/PopularArtist';
import './homeStyle.css';
import LeftSidebar from '../leftSidebar/LeftSidebar';
import yabesh from '../img/yabesh.jpg'
import MusicBar from '../musicBar/MusicBar'
import SongDisplay from '../songDisplay/SongDisplay';
import { useState, useEffect } from 'react';

import PlaylistCarousel from './playlistCarousel';
import axios from 'axios';
import { data } from 'jquery';

const Home = () => {
    
    const [artistDb, setArtistDb] = useState([]);

    const[weeklyHits, setWeeklyHits] = useState([]);


    useEffect(async ()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user.id)
        let fetchedData = await axios.get(`/getpopularartist`)
        setArtistDb(fetchedData.data)

        let fetchWeeklyHits = await axios.get(`/getweeklyhits`)
        setWeeklyHits(fetchWeeklyHits.data)
        console.log(weeklyHits)
    }, [])


    const getData=(artistDb)=>{

        // Shuffle popular artists
        let currentIndex = artistDb.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [artistDb[currentIndex], artistDb[randomIndex]] = [
            artistDb[randomIndex], artistDb[currentIndex]];
        }

        // Loop popular artists compnent till array length
        let data = []

        artistDb.map((i)=>data.push(<PopularArtist artists = {i}></PopularArtist>))
        return data;
    }

    const getWeeklyHits = ()=>{
        let currentIndex = weeklyHits.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [weeklyHits[currentIndex], weeklyHits[randomIndex]] = [
            weeklyHits[randomIndex], weeklyHits[currentIndex]];
        }

        // Loop popular artists compnent till array length
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
                        <h6 className='playListTitle'>Popular Artist</h6>
                        <div className='album d-flex'>

                            {getData(artistDb)}
                            </div>

                        </div>
                        <div className="playlist p-3 d-flex flex-wrap">
                            <div className='CarouselCtn'>
                                <PlaylistCarousel></PlaylistCarousel>
                            </div>
                            <div className='TrendingTracksCtn'>
                            <h6 className='playListTitle l-padding'>Trending this week</h6>
                            <div className="trendList">
                                {getWeeklyHits(weeklyHits)}
                            </div>
                            </div>
                            
                        </div>
                        <div className="playlist row">
                        <h6 className='playListTitle'>Popular Artist</h6>
                            <div className='album d-flex'>
                            {getData(artistDb)}
                            </div>
                        </div>
                    </div>

                    </div>
                        
                    </div>   


           
     );
}
 
export default Home;