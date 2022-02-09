import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/surilo2.png";
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import { useState } from 'react';


export default function Login(){

    const [email,setemail] = useState("");
    const [password,setpassword] =useState("");


    const postData = () => {
        Axios.post("/login",{
            email : email,
            password : password,
        }).then((response) =>{
            console.log(response.data)
            if (response.data.found==true){
                localStorage.setItem('user', JSON.stringify(response.data.data))
            }
            else {
                localStorage.clear();
            }
        });

    }

    

    return (

        <div className='login-container d-flex flex-column justify-content-center align-items-center'>
            
            <div className='semi-container d-flex flex-column justify-content-center align-items-center'>

            
            <div class="logo-contL">
                <img src={logo} alt="Surilo Logo" />
            </div>
            
            <form className='login-form'>    
                <div className="label-ctn">
                    <label htmlFor="email">Email</label>
                </div>

                <div className='entry-Ctn'>
                    <input className='usrEnt' onChange={(e) =>{setemail(e.target.value)}} type="email" autoComplete='off' placeholder='surilo@email.com' name="email" id="email" />
                </div>
                <div className="label-ctn">
                    <label htmlFor="password">Password</label>
                    </div> 
                <div className='entry-Ctn'>
                    <input className='usrEnt' onChange={(e) =>{setpassword(e.target.value)}} type="password" autoComplete='off' name="password" placeholder='********' id="password"/>
                    
                </div>
                
                <div className='regBtn-ctn'>
                    <button className='reg-btn' type="button" onClick={postData}>Login</button>  

                    <h4 className='or'> or </h4>

                    <h6 className='existLabel'>Don't have an account? <Link to='/register'>Sign Up</Link></h6>
                </div>

            </form>

            </div>        
        </div>
    )   
}


