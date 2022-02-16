import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar'
import LeftSidebar from '../leftSidebar/LeftSidebar';
import react,{useState} from 'react';
import close from '../img/close.png'

import './ProfilePage.css'
import { Redirect } from 'react-router';

function ProfilePage(){
    
    let [editClick, setEditClick] = useState(false)
    let [editClose, setEditClose] = useState(false)
    let [previewImg, setPreviewImg] = useState(null)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    function openEditfrm(){
        if (editClick == false){
            document.getElementsByClassName("EditPrfForm")[0].style.height = "400px"
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
                                <form className='editFormProfile' action="">

                                <div className='img-col-edit'>
                                <img src={`./artist_profiles/${user.profilepic}`} alt="" />
                                    <label id="upldMusic" className="chngImg">
                                    <input
                                     type="file"
                                      name='file'
                                       accept="image/*"
                                        onChange={(e)=>handlePreview(e)}
                                        />
                                    <i id="uploadSongLabel" className='btnTextPic'></i> Change Picture

                                </label>
                                </div>
                                <button className='updateUsrBtn'>Update</button>
                                </form>

                             </div>

                                <div className='img-col'>
                                    <img src={`./artist_profiles/default_profile.png`} alt="" />
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
                        <div className='artistInfoPrf'>
                             <div className='userPrfheader d-flex justify-content-between align-items-center'>

                                <h5>Artist Profile</h5>
                                {/* <button className='editPrf'>Edit Profile</button> */}
                             </div>



                                {/* If artist True display the table */}
                            <table className="userInfoTbl table">
                           
                            <tbody>
                                
                                <tr>
                                <th scope="row">Artist Name</th>
                                <td>Assmaster69</td>
                                </tr>
                                
                            </tbody>
                            </table>
                            
                            {/* If artist false display this */}
                            <div className='d-none'>
                            <h2 className='noArtistYet'>You are not an artist yet</h2>
                            <h5 className='becomeArtist'>Unleash your talent. Become an artist on Surilo</h5>
                            </div>
                        
            
                        </div> 
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