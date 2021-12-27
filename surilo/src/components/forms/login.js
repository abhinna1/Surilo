import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./surilo2.png";



export default function Login(){

    return (

        <div className='main-container d-flex flex-column justify-content-center align-items-center'>
            
            <div className='semi-container d-flex flex-column justify-content-evenly align-items-center'>

            
            <div class="logo-cont">
                <img src={logo} alt="Surilo Logo" />
            </div>
            

            

            <form className='login-form'>    
                <div className="label-ctn">
                    <label htmlFor="email">Email</label>
                </div>

                <div className='entry-Ctn'>
                    <input className='usrEnt' type="email" autoComplete='on'  name="email" id="email" />
                </div>
                <div className="label-ctn">
                    <label htmlFor="password">Password</label>
                    </div> 
                <div className='entry-Ctn'>
                    <input className='usrEnt' type="password" autoComplete='off' name="password" placeholder='********' id="password"/>
                    
                </div>
                         <button className='reg-btn'>Login</button>



            </form>

            </div>        
        </div>
    )   
}


