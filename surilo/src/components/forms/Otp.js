import './Otp.css';
import React from 'react';
import { useState } from 'react';


const Otp = () => {

    const [code,setCode] = useState({code1:"",code2:"",code3:"",code4:"",code5:"",code6:""})
    
    const [otp,setOtp] = useState();

    const [enable,setEnable] = useState(true);
    
    const handleChange = (event) =>{
        setCode({...code, [event.target.name]: event.target.value})
    }

    const sendOTP = (e) => {
        e.preventDefault()
        let otpValid = Math.floor(100000 + Math.random() * 900000)

        console.log(otpValid)
        setOtp(otpValid)
        setEnable(false)
    }

    const g = otp;

    const handleOTP = (e,getOtp) => {
        e.preventDefault()

        const usrCode = code.code1 + code.code2 + code.code3 + code.code4 + code.code5 + code.code6
        console.log(usrCode)
        console.log(getOtp)

        if(usrCode == getOtp){
            alert("Otp Valid")
        }else{
            alert("Invalid")
        }
    }
    
    return ( 

        <div className="main-container d-flex justify-content-center align-items-center">

            <div className="main-area d-flex flex-column align-items-center p-3">
                <h4 className='title text-white'>Enter your OTP</h4>
                <hr />
            
                <form>
                <div className='otp-area d-flex justify-content-between' >
                    <input className="box" autoComplete='off' type="text" name="code1" maxLength= "1" id="1" onChange={e => handleChange(e)}/>
                    <input className="box" autoComplete='off' type="text" name="code2" maxLength= "1" id="2" onChange={e => handleChange(e)}/>
                    <input className="box" autoComplete='off' type="text" name="code3" maxLength= "1" id="3" onChange={e => handleChange(e)}/>
                    <input className="box" autoComplete='off' type="text" name="code4" maxLength= "1" id="4" onChange={e => handleChange(e)}/>
                    <input className="box" autoComplete='off' type="text" name="code5" maxLength= "1" id="5" onChange={e => handleChange(e)}/>
                    <input className="box" autoComplete='off' type="text" name="code6" maxLength= "1" id="6" onChange={e => handleChange(e)}/>

            </div>
                <button disabled={enable} id="submitBtn" onClick = {e => handleOTP(e,g)} type='Submit' className='rounded p-1'>Confirm</button>
                <button onClick={e => sendOTP(e)} className='rounded p-1'>Send Code</button>
            </form>
            
            </div>

        </div>
     );
}
 
export default Otp;