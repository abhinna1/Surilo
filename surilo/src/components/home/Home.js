import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import PopularArtist from './playlist/PopularArtist';
import './homeStyle.css';
import LeftSidebar from './LeftSidebar';
import yabesh from '../img/yabesh.jpg'
import MusicBar from '../musicBar/MusicBar'
import SongDisplay from '../songDisplay/SongDisplay';


import PlaylistCarousel from './playlistCarousel';

const Home = () => {
    const artistDb =[
        {
            id:2,
            name:"Yabesh Thapa",
            cover: <img src={yabesh}/>
        }        
    ]

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
        for (let i = 0; i < artistDb.length; i++) {
            data.push(<PopularArtist artists = {artistDb[i]}></PopularArtist>)
          }
          return data;
    }


    return ( 

       <div className='homeContainer'>
                <div className='leftSidebar d-flex justify-content-center'>
                    <LeftSidebar></LeftSidebar>
                </div>
                <div className='contentContainer d-flex flex-column'>
                    <div className="row padding-nav">
                    <Navbar></Navbar>
                    </div>
                    <div className='innerContent'> 
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
                            <h6 className='playListTitle'>Trending this week</h6>
                            <SongDisplay></SongDisplay>
                            </div>
                            
                        </div>
                        <div className="playlist row">
                        <h6 className='playListTitle'>Popular Artist</h6>
                            <div className='album d-flex'>
                            {getData(artistDb)}
                            </div>
                        </div>
                    </div>
                        <MusicBar></MusicBar> 
                    </div>   


                </div>

           
     );
}
 
export default Home;