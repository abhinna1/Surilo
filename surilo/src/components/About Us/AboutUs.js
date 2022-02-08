
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Home/Navbar';
import './AboutUs.css';
import music from './image/music.jpg';
import linkedin from './image/linkedin-logo.png';
import facebook from './image/facebook.png';
import instagram from './image/instagram.png';
import github from './image/github.png';
import LeftSidebar from '../Home/LeftSidebar';
import { Link } from 'react-router-dom';



const AboutUs = () => {
    return (
        <div className='homeContainer'>
                <div className='leftSidebar d-flex justify-content-center'>
                    <LeftSidebar></LeftSidebar>
                </div>
                <div className='contentContainer d-flex flex-column'>

                <div className="row padding-nav">
                    <Navbar></Navbar>
                    </div>

                    <div className="aboutUs">
                    <div className="head">
                        <h1>ABOUT US</h1>
                        </div>

                    <div className='aboutSurilo' >
                        <img clasName="img" src={music}/>
                        <div className='text'>
                        <h4>Who are we ?</h4>
                        <p>If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play.
                            By inputting the desired number, you can make a list of as many random sentences as you want or need. 
                            Producing random sentences can be helpful in a number of different ways. By inputting the desired number, you can make a list of as many random sentences as you want or need. 
                            Producing random sentences can be helpful in a number of different ways.</p>

                            <p>If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play.
                            By inputting the desired number, you can make a list of as many random sentences as you want or need. 
                            Producing random sentences can be helpful in a number of different ways.</p>
                        </div>         
                    </div>   

                    <div className="connectToUs"> 
                    <div>
                        <h2>CONNECT TO US</h2>
                        </div>
                        <div className="icon">
                        <a href="https://www.github.com/" target="_blank"><img  src={github} alt="" /></a>
                        <a href="https://www.facebook.com/" target="_blank"><img src={facebook} alt="" /></a>
                        <a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="" /></a>
                        <a href="https://www.linkedin.com/" target="_blank"><img src={linkedin} alt="" /></a>
                          </div>

                    </div> 
        </div>
        </div>

        </div>
    )}


export default AboutUs;