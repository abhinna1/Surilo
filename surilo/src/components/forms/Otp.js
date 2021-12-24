import './Otp.css';
import React from 'react';
import { useState } from 'react';

const Otp = () => {


    return ( 

        <div className="main-container d-flex justify-content-center align-items-center">

            <div className="main-area d-flex flex-column align-items-center p-3">
                <h4 className='title text-white'>Enter your OTP</h4>
                <hr />

                <div className='otp-area d-flex m-4 justify-content-between' >
                    <input className="box" value= {code1} type="text" name="code1" maxLength= "1" id="1" />
                    <input className="box" value= {code2} type="text" name="code2" maxLength= "1" id="2"/>
                    <input className="box" value= {code3} type="text" name="code3" maxLength= "1" id="3" />
                    <input className="box" value= {code4} type="text" name="code4" maxLength= "1" id="4" />
                    <input className="box" value= {code5} type="text" name="code5" maxLength= "1" id="5" />
                    <input className="box" value= {code6} type="text" name="code6" maxLength= "1" id="6" />
                </div>

                <button className='rounded p-1' onClick={e => handleCode(code,otpCode)}>Confirm</button>
            </div>

        </div>
     );
}
 
export default Otp;