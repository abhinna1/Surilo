import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../img/surilo2.png";
import { Link } from 'react-router-dom';
import Axios from 'axios';


export default function Login(){
    const postData=()=>{
        // Axios.get("/User")
        // .then((res)=>{
        //   console.log(res["data"]);
        // })
        let email = document.getElementById("email").value;
        let pass = document.getElementById("password").value;
        Axios.post("/login",{email:email, password:pass})
          .then(()=>{console.log("posted")})
      }
      ;

    return (

        <div className='login-container d-flex flex-column justify-content-center align-items-center'>
            
            <div className='semi-container d-flex flex-column justify-content-center align-items-center'>

            
            <div class="logo-contForLogo">
                <img src={logo} alt="Surilo Logo" />
            </div>
            
            <form className='login-form'>    
                <div className="label-ctn">
                    <label htmlFor="email">Email</label>
                </div>

                <div className='entry-Ctn'>
                    <input className='usrEnt' type="email" autoComplete='off' placeholder='surilo@email.com' name="email" id="email" />
                </div>
                <div className="label-ctn">
                    <label htmlFor="password">Password</label>
                    </div> 
                <div className='entry-Ctn'>
                    <input className='usrEnt' type="password" autoComplete='off' name="password" placeholder='********' id="password"/>
                    
                </div>
                
                <div className='regBtn-ctn'>
                    <button className='reg-btn' onClick={postData}>Login</button>  
                    <h6 className='existLabel'>Don't have an account? <Link to='/register'>Sign Up</Link></h6>
                </div>



            </form>

            </div>        
        </div>
    )   
}


