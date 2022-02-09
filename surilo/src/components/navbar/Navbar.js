import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import accountUser from '../img/accountUser.png'
import react,{useState} from 'react'
import AccDropdown from '../AccountDropdown/AccDropdown';




const Navbar = () => {
    const [accountDropdownShow,setaccountDropdownShow]=useState(false)
    
    function getButtons(){
        if(localStorage.getItem('user')===null){
            return <a href="/login" className='login-link'>Login</a>
        }
        else{
            return (
                <div className='d-flex justify-content-evenly align-items-center'>
                    <button className='artistBtn'>Become an artist</button>
                    <button className='accountUser' onClick={()=>setaccountDropdownShow(!accountDropdownShow)}> <img src={accountUser} alt="" /></button>
                </div>
            )
        }
    }

    
    // userData = localStorage.getItem('user')
    return ( 
        <div className="navCtn d-flex align-items-center justify-content-between">

            <input className="search-control" type="search" placeholder="Songs, podcasts, genre, artists" aria-label="Search"/>

            <div className='link-container justify-content-end'>
                {getButtons()}
                {accountDropdownShow?<AccDropdown userData = {JSON.parse(localStorage.getItem('user'))}></AccDropdown>:null}
            </div>

        </div>
     );
}
 
export default Navbar;