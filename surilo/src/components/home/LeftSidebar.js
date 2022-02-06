import logo from '../img/surilo2.png'
import home from '../img/home.png'
import love from '../img/love.png'
import smallLogo from '../img/smallLogo.png'
import playlist from '../img/playlist.png'
import './homeStyle.css'
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    return ( 
        <div className="d-flex flex-column justify-content-start pt-3">
        <div className="logo-cont">
        <Link className='bigLogo' to="/home"><img src={logo} alt="" /></Link> 
        <Link className='smallLogo' to="/home"><img src={smallLogo} alt="" /></Link> 
        </div>

        <div className='Navlink d-flex flex-column'>
            <div className='link d-flex'><Link to="/home"><img src={home} alt="" /> <h6>Home </h6></Link></div>
            <div className='link d-flex'><Link to="/home"><img src={playlist} alt=""/><h6>Playlist</h6></Link></div>
            <div className='link d-flex'><Link to="/home"><img src={love} alt="" /><h6>Favourite</h6></Link></div>

        </div>

        </div>
     );
}
 
export default LeftSidebar;