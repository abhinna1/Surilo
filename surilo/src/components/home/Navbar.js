import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import BecomeArtist from '../artistPage/BecomeArtist';
import { useState } from 'react';




function logout(){
    localStorage.clear();
    // alert(localStorage.getItem('email'))
}

function getButtons(){
    if(localStorage.getItem('user')===null){
        return <button onClick={logout} className='login-btn'><a href="/login" className='login-link'>Login</a></button>
    }
    else{
        return (
        <div>
        <button>{JSON.parse(localStorage.getItem('user')).username}</button>
        {/* <button onClick={logout} className='login-btn'><a href="/login" className='login-link'>Logout</a></button> */}
        </div>
        )
    }
}

const Navbar = () => {
    const [buttonPopup, setButtonPopup]= useState(false);
    
    return ( 
        <div className="navbar d-flex">

            <input className="search-control" type="search" placeholder="Songs, podcasts, genre, artists" aria-label="Search"/>

            <div className='link-container'>
                {getButtons()}
                <button className='artistBtn' onClick={() => setButtonPopup(true)}>Become an artist</button>


                <BecomeArtist trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <form action="">
                        <div className='artist-detail'>
                            <label htmlFor="artistName">Artist Name</label><br />
                            <input type="text" autocomplete ="off" name="artistname" id="artistName" placeholder='Mister Artist' />

                        </div>

                        <div className='artist-detail'>
                            <label htmlFor="phoneNumber">Phone Number</label><br />
                            <input type="tel"name="phoneNumber" autocomplete ="off" placeholder="98********" id="phoneNumber" />

                        </div>

                        <div className='artist-detail'>
                            <label htmlFor="document">Document</label><br />
                            <input type="file" accept="image/*" name="document" autocomplete ="off" placeholder='Driving Lisence, Passport or Citizenship' id="document" />

                        </div>

                        <button type="submit" className='sub-btn'> Submit </button>


                    </form>
                </BecomeArtist>
            </div>
        </div>
     );
}
 
export default Navbar;