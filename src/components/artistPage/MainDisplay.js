import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar';
import './MainDisplay.css';
import yabesh from '../img/yabesh.jpg'
import LeftSidebar from '../leftSidebar/LeftSidebar';
import playBtn from '../img/playBtn.png'
import MusicBar from '../musicBar/MusicBar'

import SongDisplay from '../songDisplay/SongDisplay';
import Header from '../songDisplay/Header';

const MainDisplay = () => {
    return (
        // <div className='homeContainer'>
        //         <div className='leftSidebar d-flex justify-content-center'>
        //             <LeftSidebar></LeftSidebar>
        //         </div>
        //         <div className='contentContainer d-flex flex-column'>

        //         <div className="row padding-nav">
        //             <Navbar></Navbar>
        //             </div>
        //             <div className='artistCtn'>
        //                     <div className="artistPrf">
        //                         <div className="one">
        //                         <div className="artistImage">
        //                             <img src={yabesh} alt="" />
        //                         </div>
        //                         </div>
    
        //                     <div className="two">
        //                         <div className="artistTitle"><h1>Yabesh Thapa</h1></div>
        //                         <div className="artistDesc">
        //                             <p> Nulla ultricies a leo sed aliquet. Proin pellentesque sapien nec faucibus tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare lacinia mi in suscipit.</p>
        //                         </div>
        //                         <div className="artistAction">
        //                             <button className="followBtn">Follow</button>
        //                             <button className="followBtn playall"><img className='playAllBtn' src={playBtn} alt="" /></button>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <Header></Header>
        //                 <div className='songDisplayCtn'>

        //                 <SongDisplay></SongDisplay>
        //                 </div>
        //             </div>
        // </div>

        // </div>

        
        <div className='homeContainer'>
        <div>
        <LeftSidebar></LeftSidebar>
        </div>
        <div className='contentContainer d-flex flex-column'>
                    <Navbar></Navbar>
            <div className='InnerCtn'>

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
    )
}

export default MainDisplay;