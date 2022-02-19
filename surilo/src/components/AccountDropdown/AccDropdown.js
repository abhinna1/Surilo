import './AccDropdown.css'
import { Link } from 'react-router-dom';

function logout(){
    localStorage.clear();
    // alert(localStorage.getItem('email'))
}

function getMusicBtn(){
    if(JSON.parse(localStorage.getItem('user')).is_artist==1){
        return <button onClick={logout} className='login-btn'><a href="/musicform" className='login-link'>Create music</a></button>
    }
}


function getAlbumBtn(){
    if(JSON.parse(localStorage.getItem('user')).is_artist==1){
        return <button onClick={logout} className='login-btn'><a href="/albumform" className='login-link'>Create album</a></button>
    }
}

function AccDropdown(props){
    const AccUsername= props.userData.username

    return(

    <div className='accountDropdown'>
        <h6>{AccUsername}</h6>
        
        <Link to="/account/profile">Account</Link>

        {getAlbumBtn()}
        {getMusicBtn()}

        <button onClick={logout} className='login-btn'><a href="/login" className='login-link'>Logout</a></button>

    </div>
    )
}

export default AccDropdown;

