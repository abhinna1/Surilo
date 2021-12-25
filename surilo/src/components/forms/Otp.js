import './Otp.css';
import React from 'react';
import { useState } from 'react';


const Otp = () => {

    const emptyData = {
        code1:"",
        code2:"",
        code3:"",
        code4:"",
        code5:"",
        code6:""
     }

    const [code,setCode] = useState({emptyData})
    
    const [otp,setOtp] = useState();

    const [enable,setEnable] = useState(true);
    
    const handleChange = (event) =>{
        setCode({...code, [event.target.name]: event.target.value})
    }

    const sendOTP = (e) => {
        e.preventDefault()
        let otpValid = Math.floor(100000 + Math.random() * 900000)

        console.log(`OTP: ${otpValid}`)
        setOtp(otpValid)
        setEnable(false)
    }

    const g = otp;

    const handleOTP = (e,getOtp) => {
        e.preventDefault()

        const usrCode = code.code1 + code.code2 + code.code3 + code.code4 + code.code5 + code.code6
        console.log(`UserOTP: ${usrCode}`)


        if(usrCode == getOtp){
            alert("Otp Valid")
        }else{
            alert("Invalid")
            setCode(emptyData)
        }
    }
    
    return ( 

        <div className="main-container d-flex justify-content-center align-items-center">

            <div className="main-area d-flex flex-column align-items-center p-3">
                <h4 className='title text-white'>Enter your OTP</h4>
                <hr />
            
                <form>
                <div className='otp-area d-flex justify-content-between' >
                    <input className="box" value ={code.code1} autoComplete='off' type="text" name="code1" maxLength= "1" id="num" onChange={e => handleChange(e)}/>
                    <input className="box" value ={code.code2} autoComplete='off' type="text" name="code2" maxLength= "1" id="num" onChange={e => handleChange(e)}/>
                    <input className="box" value ={code.code3} autoComplete='off' type="text" name="code3" maxLength= "1" id="num" onChange={e => handleChange(e)}/>
                    <input className="box" value ={code.code4} autoComplete='off' type="text" name="code4" maxLength= "1" id="num" onChange={e => handleChange(e)}/>
                    <input className="box" value ={code.code5} autoComplete='off' type="text" name="code5" maxLength= "1" id="num" onChange={e => handleChange(e)}/>
                    <input className="box" value ={code.code6} autoComplete='off' type="text" name="code6" maxLength= "1" id="num" onChange={e => handleChange(e)}/>

            </div>
                <button disabled={enable} id="submitBtn" onClick = {e => handleOTP(e,g)} type='Submit' className='rounded p-1'>Confirm</button>
                <button onClick={e => sendOTP(e)} className='rounded p-1'>Send Code</button>

            </form>
            <a onClick={e => sendOTP(e)}>Resend Code</a>
            </div>

        </div>
     );
}
 
export default Otp;