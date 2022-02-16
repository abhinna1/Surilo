import './AccDropdown.css'
import { Link } from 'react-router-dom';

function logout(){
    localStorage.clear();
    // alert(localStorage.getItem('email'))
}

function AccDropdown(props){
    const AccUsername= props.userData.username

    return(

    <div className='accountDropdown'>
        <h6>{AccUsername}</h6>
        <Link to="/account/profile">Account</Link>

            <button onClick={logout} className='login-btn'><a href="/login" className='login-link'>Logout</a></button>

    </div>
    )
}

export default AccDropdown;

