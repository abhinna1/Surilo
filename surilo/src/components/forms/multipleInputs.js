import React from 'react';
import './multipleInputs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./surilo2.png";
import next from "./next.png";
import { Link } from 'react-router-dom';


export default function MultipleInputs(){


    return (

        <div className='d-flex flex-column justify-content-center align-items-center'>
            
            <div class="logo-cont">
                <img src={logo} alt="Surilo Logo" />
            </div>
            

            <div class="slogan text-center">
                <h1>Sign up to discover your favorite artists</h1>
            </div>

            <hr className='hor'/>

            <div class="info m-2">
                <h4>Kindly fill with valid details</h4>
            </div>

            <form className='cred-form'>
                    <div className="label-ctn">
                    <label htmlFor="username">Username</label>
                    </div>
                <div className='entry-Ctn'>   
                    <input className='usrEnt' type="text" autoComplete='off' name="username" placeholder='testuser456' id="username"/>      
                </div>
                <div className="label-ctn">
                    <label htmlFor="email">Email</label>
                </div>

                <div className='entry-Ctn'>
                    <input className='usrEnt' type="email" autoComplete='off'  name="email" placeholder='temp_mail@email.com' id="email" />
                </div>
                <div className="label-ctn">
                    <label htmlFor="password">Password</label>
                    </div> 
                <div className='entry-Ctn'>
                    <input className='usrEnt' type="password" autoComplete='off' name="password" placeholder='********' id="password"/>
                    
                </div>
                <div className="label-ctn">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                </div> 
                <div className='entry-Ctn'>
                    <input className='usrEnt' type="password" autoComplete='off' name="confirmPassword" placeholder='********' id="confirmPassword" />
                    <p className='error-msg' id="err"></p>
                </div>

                {/* <div className="btn-ctn">
                    <button type='submit'> 
                        <img className='next-btn' src={next} alt="" />
                        
                    </button>
                </div> */}
                <div className="btn-ctn">
                    <Link to= '/signUp2' type='submit'>Signup</Link>
                </div>


            </form>

        
        </div>
    )
}


