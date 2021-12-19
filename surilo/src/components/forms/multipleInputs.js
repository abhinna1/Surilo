import React from 'react'
import "./multipleInputs.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const MultipleInputs = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>

            <div class="slogan">
                <h1>Sign up to discover your favorite artists</h1>
            </div>

            <hr />

            <div class="info">
                <h4>Kindly fill with valid details</h4>
            </div>

        <form action="">
            <label htmlFor="username">Username</label>
            <div>   
                <input className='usrEnt' type="text" autoComplete='off' name="username" placeholder='testuser456' id="username" />
            </div>

            <label htmlFor="email">Email</label>
            <div>
                <input className='usrEnt' type="email" autoComplete='off' name="email" placeholder='temp_mail@email.com' id="email" />
            </div>

            <label htmlFor="password">Password</label>
            <div>
                <input className='usrEnt' type="password" autoComplete='off' name="password" placeholder='********' id="password" />
            </div>

            <label htmlFor="confirmPassword">Confirm Password</label>
            <div>
                <input className='usrEnt' type="password" autoComplete='off' name="confirmPassword" placeholder='********' id="confirmPassword" />
            </div>

        </form>
        
        </div>
    )
}

export default MultipleInputs
