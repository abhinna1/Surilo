import React from 'react'
import "./multipleInputs.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from "./surilo2.png"
import next from "./next.png"

const MultipleInputs = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            
            
            <div class="logo-cont">
                <img src={logo} alt="Surilo Logo" />
            </div>
            

            <div class="slogan">
                <h1>Sign up to discover your favorite artists</h1>
            </div>

            <hr />

            <div class="info">
                <h4>Kindly fill with valid details</h4>
            </div>

        <form action="">
            <div className='entry-Ctn'>   
                <label htmlFor="username">Username</label>
                <input className='usrEnt' type="text" autoComplete='off' name="username" placeholder='testuser456' id="username" />
            </div>

            <div className='entry-Ctn'>
            <label htmlFor="email">Email</label>
                <input className='usrEnt' type="email" autoComplete='off' name="email" placeholder='temp_mail@email.com' id="email" />
            </div>

            <div className='entry-Ctn'>
            <label htmlFor="password">Password</label>
                <input className='usrEnt' type="password" autoComplete='off' name="password" placeholder='********' id="password" />
            </div>

            <div className='entry-Ctn'>
            <label htmlFor="confirmPassword">Confirm Password</label>
                <input className='usrEnt' type="password" autoComplete='off' name="confirmPassword" placeholder='********' id="confirmPassword" />
            </div>

            <div className="btn-ctn">
                <button> 
                    <a href="#"><img className='next-btn' src={next} alt="" /></a>
                </button>
            </div>


        </form>
        
        </div>
    )
}

export default MultipleInputs
