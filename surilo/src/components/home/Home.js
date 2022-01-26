import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import PopularArtist from './playlist/PopularArtist';
import './homeStyle.css';
import LeftSidebar from './LeftSidebar';
import abhinna from './img/abhina.png'
import yabesh from './img/yabesh.jpg'
import melina from './img/melina.jpg'
import sushant from './img/sushant.jpg'
import vten from './img/vten.jpg'
import samyam from './img/samyam.jpg'
import sanif from './img/sanif.png'


const Home = () => {
    const artistDb =[
        {
            id:1,
            name:"Abhinna Manandhar",
            cover: <img src={abhinna}/>
        },
        {
            id:2,
            name:"Yabesh Thapa",
            cover: <img src={yabesh}/>
        },
        {
            id:3,
            name:"Melina Rai",
            cover: <img src={melina}/>
        },
        {
            id:4,
            name:"Sushant KC",
            cover: <img src={sushant}/>
        }
        ,
        {
            id:5,
            name:"Vten",
            cover: <img src={vten}/>
        },
        {
            id:6,
            name:"Samyam",
            cover: <img src={samyam}/>
        },
        {
            id:7,
            name:"Sanif",
            cover: <img src={sanif}/>
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

                    <div className="playlist row">
                    <h6 className='playListTitle'>Popular Artist</h6>
                        <div className='album d-flex'>
                            {getData(artistDb)}      
                        </div>
                    </div>
                    </div>    

                </div>

           
     );
}
 
export default Home;