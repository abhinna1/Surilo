import React from 'react';
import "./InfoReg.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./surilo2.png";
import { useState } from 'react';
import Otp from './Otp';
import { Link } from 'react-router-dom';
    

export default function InfoReg(){

    let formIsValid = true;


    const fieldData = {
        firstName :"",
        lastName :"",
        dob :""
        }

    const [fields,setFields] = useState({fieldData});
    const [gender,setGender] = useState();


    const handleChange = (event) => {
        setFields({...fields, [event.target.name]: event.target.value})

    }

    const handleGenderChange = (event) =>{
        // console.log(event.target.name ,":", event.target.checked)
        
        if(event.target.checked){
            setGender(event.target.value)
        }
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(formIsValid){
            document.getElementById("otpCtn").classList.remove('hide') //removes the hide class that initially hid the OTP container when the form is valid letting user enter
        }
    }


    return (

        <div className='d-flex flex-column justify-content-center align-items-center'>
            
            <div className="logo-cont">
                <img src={logo} alt="Surilo Logo" />
            </div>
            

            <div className="slogan text-center">
                <h1>Just a bit to go</h1>
            </div>

            <hr />

            

            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="label-ctn">
                    <label htmlFor="firstName">First Name</label>
                </div>
                <div className='entry-Ctn'>     
                    <input className='usrEnt' value={fields.firstName} type="text" autoComplete='off' name="firstName" placeholder='Elon' id="firstName" onChange={e => handleChange(e)}/> 
                
                </div>
                <div className="label-ctn">
                    <label htmlFor="lastName">Last Name</label>
                </div>
                <div className='entry-Ctn'>   
                    <input className='usrEnt' value={fields.lastName} type="text" autoComplete='off' name="lastName" placeholder='Musk' id="lastName" onChange={e => handleChange(e)}/> 
                    
                </div>
                 
                <div className="label-ctn">
                    <label htmlFor="dob">Date of birth</label>
                    </div>
                <div className='entry-Ctn'>   
                    <input className='usrEnt' value={fields.dob} type="date" autoComplete='off' name="dob" id="dob" onChange={e => handleChange(e)}/> 
                    
                </div>      

                <div className="label-ctn">
                    <label htmlFor="dob">Gender</label>
                    </div>
                <div className='entry-Ctn'>   
                    <div className='gender-container' onChange={e => handleGenderChange(e)}>
                        <div className='g-ctn'>
                            <input type="radio" className='gen-chk' value="male" name="gender" id="Chk" />
                            <label for="male" className='gen-label'> Male</label>
                        </div>

                        <div className='g-ctn'>
                            <input type="radio" className='gen-chk' value="female" name="gender" id="Chk"  />
                            <label for="female" className='gen-label'> Female</label>
                        </div>

                        <div className='g-ctn'>
                            <input type="radio" className='gen-chk' value="other" name="gender" id="Chk"  />
                            <label for="other" className='gen-label'> Other</label>
                        </div>
                    </div>

                </div>    

                <div className='regBtn-ctn'>
                    <button type='submit' className='reg-btn'>Sign up</button>
                    
                    <h6 className='existLabel'>Already have an account? <Link to ='/'>Log in</Link></h6>
                </div>
                




            </form>
            
        
            <div className='OTP-ctn hide' id="otpCtn">
                <Otp fields={fields} gender={gender}></Otp>
            </div>
        </div>
    )
}


