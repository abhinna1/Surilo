import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';



const Navbar = () => {
    return ( 
        <div className="navbar d-flex">

            <input className="search-control" type="search" placeholder="Songs, podcasts, genre, artists" aria-label="Search"/>

            <div className='link-container'>
                <button className='artistBtn'>Become an artist</button>
                <a href="/" className='login-link'>Log in</a>
            </div>
        </div>
     );
}
 
export default Navbar;