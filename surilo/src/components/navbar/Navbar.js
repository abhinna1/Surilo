import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import accountUser from '../img/accountUser.png'
import react,{useState} from 'react'
import AccDropdown from '../AccountDropdown/AccDropdown';
import BecomeArtist from '../artistPage/BecomeArtist';
import axios from 'axios';
import { Redirect } from 'react-router';

const Navbar = () => {
    const [accountDropdownShow,setaccountDropdownShow]=useState(false)
    const [buttonPopup, setButtonPopup]= useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [file, setFile] = useState(null);
    const [documentType, setDocumentType] = useState('');


    function getButtons(){
        const getArtistBtn= ()=>{
            if(JSON.parse(localStorage.getItem('user'))['is_artist']==0) return <button className='artistBtn' onClick={() => setButtonPopup(true)}>Become an artist</button>;
            else return null;
        }
        if(localStorage.getItem('user')===null){
            return <a href="/login" className='login-link'>Login</a>
        }
        else{
            return (
                <div className='d-flex justify-content-evenly align-items-center'>
                    {getArtistBtn()}
                    <button className='accountUser' onClick={()=>setaccountDropdownShow(!accountDropdownShow)}><img src={accountUser} alt="" className="user-image"/> <h6 className='user-name'> {JSON.parse(localStorage.getItem('user'))['username']} </h6> </button>
                </div>
            )
        }
    }

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handlePhoneChange(e){
        setPhone(e.target.value);
    }

    function handleTypeChange(e){
        setDocumentType(e.target.value);
    }

    function handleFile(e){
        setFile(e.target.files[0]);
    }

    function  handleSubmit(event){
        event.preventDefault()
        const formData = new FormData();
        formData.append('name', name)
        formData.append('phone', phone)
        formData.append('doctype', documentType)        
        formData.append('file', file)
        formData.append('user', JSON.parse(localStorage.getItem('user')).id)

        axios.post('/submitalbumform', formData)
        localStorage.clear()
        const red = ()=>{return <Redirect to='/login'/>};
        red();
    }
    
    return ( 
        <div className="navCtn d-flex align-items-center justify-content-between">

            <input className="search-control" type="search" placeholder="Songs, podcasts, genre, artists" aria-label="Search"/>

            <div className='link-container justify-content-end'>
                {getButtons()}
                {accountDropdownShow?<AccDropdown userData = {JSON.parse(localStorage.getItem('user'))}></AccDropdown>:null}
            </div>
            <BecomeArtist trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <form onSubmit={handleSubmit} method="POST" action="">
                        <div className='artist-detail'>
                            <label htmlFor="artistName">Artist Name</label><br />
                            <input type="text" autocomplete ="off" name="artistname" id="artistName" placeholder=' Yabesh Thapa' onChange={handleNameChange} />

                        </div>

                        <div className='artist-detail'>
                            <label htmlFor="phoneNumber">Phone Number</label><br />
                            <input type="text"name="phoneNumber" autocomplete ="off" id="phoneNumber" onChange={handlePhoneChange} />

                        </div>

                        <div className='artist-detail'>
                            <label htmlFor="phoneNumber">Document Tyle</label><br />
                            <select name="documentType" class='doctype-input' id="documentType" onChange={handleTypeChange} >
                                <option value="Citizenship" class='type-option'>Citizenship</option>
                                <option value="License" class='type-option'>License</option>
                            </select>

                        </div>

                        <div className='artist-detail'>
                            <label htmlFor="document">Document</label><br />
                            <input type="file" accept='image/*' name="document" autocomplete ="off" placeholder='Driving Lisence, Passport or Citizenship' id="document" onChange={handleFile} />
                        </div>

                        <button type="submit" className='sub-btn'> Submit </button>


                    </form>
                </BecomeArtist>

        </div>
     );
}
 
export default Navbar;