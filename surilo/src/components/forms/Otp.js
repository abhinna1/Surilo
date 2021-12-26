import './Otp.css';
import React from 'react';
import { useState } from 'react';


const Otp = (props) => {

    const fields = props.fields;
    const gender = props.gender

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

            const { maxLength, value, id } = event.target;
            const [fieldId, fieldIndex] = id.split("-");
          
            let fieldIntIndex = parseInt(fieldIndex, 6);
          
            // Check if number of character in field == maxlength
            if (value.length >= maxLength) {
          
              // It should not be last input field
              if (fieldIntIndex < 7) {
          
                // Get the next input field using it's name
                const nextfield = document.querySelector(
                  `input[id=chk-${fieldIntIndex + 1}]`
                );
          
                // If found, focus the next field
                if (nextfield !== null) {
                  nextfield.focus();
                }
              }
            }

    }

    const sendOTP = (e) => {
        e.preventDefault()
        let otpValid = Math.floor(100000 + Math.random() * 900000)

        console.log(`OTP: ${otpValid}`)
        setOtp(otpValid)
        setEnable(false)

        document.getElementById("sendCode").innerHTML="Code not reached yet? Resend"
    }



    const validateOTP = (e,getOtp) => {
        e.preventDefault()

        const usrCode = code.code1 + code.code2 + code.code3 + code.code4 + code.code5 + code.code6
        console.log(`UserOTP: ${usrCode}`)


        if(usrCode == getOtp){
            alert("Otp Valid")
            console.log(`FirstName:${fields.firstName}`)
            console.log(`LastName:${fields.lastName}`)
            console.log(`Date of Birth:${fields.dob}`)
            console.log(`Gender:${gender}`)

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
                    <input className="box" value ={code.code1} autoComplete='off' type="text" name="code1" maxLength= "1" id="chk-1" onChange={e => handleChange(e)}/>
                    <input className="box" value ={code.code2} autoComplete='off' type="text" name="code2" maxLength= "1" id="chk-2" onChange={e => handleChange(e)}/>
                    <input className="box" value ={code.code3} autoComplete='off' type="text" name="code3" maxLength= "1" id="chk-3" onChange={e => handleChange(e)}/>
                    <input className="box" value ={code.code4} autoComplete='off' type="text" name="code4" maxLength= "1" id="chk-4" onChange={e => handleChange(e)}/>
                    <input className="box" value ={code.code5} autoComplete='off' type="text" name="code5" maxLength= "1" id="chk-5" onChange={e => handleChange(e)}/>
                    <input className="box" value ={code.code6} autoComplete='off' type="text" name="code6" maxLength= "1" id="chk-6" onChange={e => handleChange(e)}/>

            </div>
                <button disabled={enable} id="submitBtn" onClick = {e => validateOTP(e,otp)} type='Submit' className='confirm-btn p-1'>Confirm</button>
                
            </form>
            <a id="sendCode" className="codeSend" onClick={e => sendOTP(e)}>Send Code</a>
            </div>

        </div>
     );
}
 
export default Otp;