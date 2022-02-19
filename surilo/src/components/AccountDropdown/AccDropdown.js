import './AccDropdown.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


function logout(){
    localStorage.clear();
}






function AccDropdown(props){
    const AccUsername= props.userData.username
    

    const [artistid, setArtistid] = useState(0);
    const[isverified, setVerified] = useState(0);


    

    useEffect(
        async function getDatas(){
            let fetchedData = await axios.get(`/getartistfromusedid/${JSON.parse(localStorage.getItem('user')).id}`);
            let getverifiedstat = await axios.get(`/getartistdata/${ fetchedData.data[0].artist_id }`);
            setVerified(getverifiedstat.data[0]['is_verified']);
            console.log(isverified)
        
    }, [])

    function getMusicBtn(){
        if(JSON.parse(localStorage.getItem('user')).is_artist==1){
            if(isverified===1){
            return <a href="/musicform">Create music</a>
        }}

    }
    function getAlbumBtn(){
        if(JSON.parse(localStorage.getItem('user')).is_artist==1){
            if(isverified===1){
                return <a href="/albumform">Create album</a>
        }}
    }

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