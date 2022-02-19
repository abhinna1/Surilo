import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar'
import LeftSidebar from '../leftSidebar/LeftSidebar';
import react,{useState, useEffect} from 'react';
import close from '../img/close.png'


import './ProfilePage.css'
import { Redirect } from 'react-router';
import axios from 'axios';

function ProfilePage(){
    
    let [editClick, setEditClick] = useState(false);
    let [editClose, setEditClose] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    let [previewImg, setPreviewImg] = useState(`../artist_profiles/${user['profilepic']}`)

    const [artistName, setArtistname] = useState('xyz');
    
    const [email, setEmail] = useState(user['email']);
    const [username, setUsername] = useState(user['username']);
    const [file, setFile] = useState(null);
    const handleEmailChange = (e)=>{
        setEmail(e.target.value);
    }
    
    const handleUsernameChange = (e)=>{
        setUsername(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        const formData = new FormData();
        formData.append('username', username);
        formData.append('file', file);
        formData.append('email', email);
        formData.append('id', user.id)
        axios.post('/updateUser', formData)
        alert('updated');
    }

    const getArtistPart = ()=>{
        if(user['is_artist']===1){
            return(
            <div className='artistInfoPrf'>
            {/* If artist True display the table */}
            <h5 style={{marginBottom:'0px', marginTop:'0px'}}>Artist Profile</h5>

            <table className="userInfoTbl table">

            <tbody>

                <th scope="row">Artist Name</th>
                <td><input value={artistName} className='edit-input' onChange={(e)=>{setArtistname(e.target.value)}}/></td>
            
                
                
                </tbody>
            </table>
            </div>
            )
        }
              
        else{
            {/* If artist false display this */}
            return(
            <div className='artistInfoPrf'>
                <div className='d-none'>
                    <h2 className='noArtistYet'>You are not an artist yet</h2>
                    <h5 className='becomeArtist'>Unleash your talent. Become an artist on Surilo</h5>
                </div>    
            </div> 
            )
        }
    }
    

    function openEditfrm(){
        if (editClick == false){
            document.getElementsByClassName("EditPrfForm")[0].style.height = "450px"
            document.getElementsByClassName("userInfoTbl")[0].style.display ="none"
            document.getElementsByClassName("img-col")[0].style.display ="none"
            setEditClick(true)
            setEditClose(true)
        }
    }

    function closeEditfrm(){

        if(editClick==true){
            document.getElementsByClassName("EditPrfForm")[0].style.height = "0px"
            document.getElementsByClassName("userInfoTbl")[0].style.display ="block"
            document.getElementsByClassName("img-col")[0].style.display ="block"
        
            setEditClick(false)
            setEditClose(false)
        }
    }
    function handlePreview(e){
        console.log(e.target.value)
        const file = e.target.files[0];
        if (!file) return;
        setFile(file)
        const url = URL.createObjectURL(file);
        setPreviewImg(url)
    }
    if(user){
    return (
        <div className='homeContainer'>
            <div>
                <LeftSidebar></LeftSidebar>
            </div>
                 <div className='contentContainer d-flex flex-column'>
                     <Navbar></Navbar>
                     <div className="innerContainer">
                         <h1 className='accTitle'>Account Overview</h1>
                         <hr className='accTitleHr'/>

                         <div className='userPrf'>
                             <div className='userPrfheader d-flex justify-content-between align-items-center'>

                                <h5>Profile</h5>
                                {editClose?<button className="closeBtn"  onClick={()=>closeEditfrm()}> <img src={close} alt="" /> </button>:<button className='editPrf' onClick={()=>openEditfrm()}>Edit Profile</button> }
                                

                             </div>

                             <div className='EditPrfForm'>
                                <h5>Edit Profile</h5>
                            <form className='editFormProfile' onSubmit={async(e)=>{await handleSubmit(e)}}>

                                <div className='img-col-edit'>
                                <img src={previewImg} alt="" />
                                    <label id="upldMusic" className="chngImg">
                                    <input
                                     type="file"
                                      name='file'
                                       accept="image/*"
                                        onChange={(e)=>handlePreview(e)}
                                        />
                                    <i id="uploadSongLabel" className='btnTextPic'>  Change Picture</i>

                                </label>

                        
                        </div>
                                <table className="table">
                           
                                    <tbody>
                                        
                                        <tr>
                                            <th scope="row">Username</th>
                                            <td> <input className='edit-input' type="text" value={username} name="username" onChange={handleUsernameChange}/></td>
                                        </tr>


                                        <tr>
                                            <th scope="row">Email</th>
                                            <td><input className='edit-input' type="text" value={email} name="" onChange={handleEmailChange}/></td>
                                        </tr>

                                    </tbody>
                                </table>

                        
                        <button className='updateUsrBtn'>Update</button>
                    </form>
                             </div>

                                <div className='img-col'>
                                    <img src={previewImg} alt="" />
                                </div>
                            <table className="userInfoTbl table">
                           
                            <tbody>
                                
                                <tr>
                                <th scope="row">Username</th>
                                <td> {user['username']}</td>
                                </tr>
                                <tr>

                                <th scope="row">First Name</th>
                                <td>{user['firstname']}</td>
                                </tr>

                                <tr>
                                <th scope="row">Last Name</th>
                                <td>{user['lastName']}</td>
                                </tr>

                                <tr>
                                <th scope="row">DOB</th>
                                <td>{user['dob']}</td>
                                </tr>

                                <tr>
                                <th scope="row">Email</th>
                                <td>{user['email']}</td>
                                </tr>

                                

                            </tbody>
                            </table>
                        
                        {/* <button className='editPrf'>Edit Profile</button> */}
                        </div>
                            {getArtistPart()}
                     </div>
                     </div>
                         
                     </div>   
    )
    }
    return (
        <Redirect to='/login'/>
    )
}

export default ProfilePage;