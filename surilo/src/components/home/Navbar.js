import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';


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
    return ( 
        <div className="navbar d-flex">

            <input className="search-control" type="search" placeholder="Songs, podcasts, genre, artists" aria-label="Search"/>

            <div className='link-container'>
                <button className='artistBtn'>Become an artist</button>
                {getButtons()}
            </div>
        </div>
     );
}
 
export default Navbar;