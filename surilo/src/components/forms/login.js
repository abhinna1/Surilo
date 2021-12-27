import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./surilo2.png";



export default function Login(){

    return (

        <div className='login-container d-flex flex-column justify-content-center align-items-center'>
            
            <div className='semi-container d-flex flex-column justify-content-center align-items-center'>

            
            <div class="logo-cont">
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
                    <button className='reg-btn'>Login</button>  
                    <h6 className='existLabel'>Don't have an account? <a href="">Sign up</a></h6>
                </div>



            </form>

            </div>        
        </div>
    )   
}


