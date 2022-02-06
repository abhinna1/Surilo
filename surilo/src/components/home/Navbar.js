import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import BecomeArtist from '../artistPage/BecomeArtist';
import { useState } from 'react';





const Navbar = () => {
    const [buttonPopup, setButtonPopup]= useState(false);
    
    return ( 
        <div className="navbar d-flex">

            <input className="search-control" type="search" placeholder="Songs, podcasts, genre, artists" aria-label="Search"/>

            <div className='link-container'>
                <button className='artistBtn' onClick={() => setButtonPopup(true)}>Become an artist</button>
                <a href="" className='login-link'>Log in</a>
                <BecomeArtist trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <form action="">
                        <div className='artist-detail'>
                            <label htmlFor="artistName">Artist Name</label><br />
                            <input type="text" autocomplete ="off" name="artistname" id="artistName" placeholder=' Yabesh Thapa' />

                        </div>

                        <div className='artist-detail'>
                            <label htmlFor="phoneNumber">Phone Number</label><br />
                            <input type="tel"name="phoneNumber" autocomplete ="off" id="phoneNumber" />

                        </div>

                        <div className='artist-detail'>
                            <label htmlFor="document">Document</label><br />
                            <input type="img" name="document" autocomplete ="off" placeholder='Driving Lisence, Passport or Citizenship' id="document" />

                        </div>

                        <button type="submit" className='sub-btn'> Submit </button>


                    </form>
                </BecomeArtist>
            </div>
        </div>
     );
}
 
export default Navbar;