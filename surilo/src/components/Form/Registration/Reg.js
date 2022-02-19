import React from 'react';
import "./InfoReg.css";
import './multipleInputs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/surilo2.png";
import { useState } from 'react';
import { useHistory } from 'react-router';
import Otp from './Otp.js';
import { Link } from 'react-router-dom';
import next from "../images/next.png";
import axios from 'axios';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import { isValid } from 'ipaddr.js';

const fieldData = {
    firstName :"",
    lastName :"",
    dob :"",
    gender: "",
    username: "",
    email: "",
    password: "",
    confirmpassword :""
}


export default function InfoReg(){
    let formIsValid = true;
    const [step, setStep] = useState(1);
    const[gender, setGender] = useState("");

    const [fields,setFields] = useState({fieldData});
    const [errors, setErrors] = useState({firstEr:"error"});

    async function validateForm1(){
        const er = {usernameEr:"", emailEr:"", passwordEr:"", confirmpasswordEr:""};
        if(fieldData.username.length<4){
            er.usernameEr="Username is too short.";
            formIsValid = false;
        }
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fieldData.email) == false){
            er.emailEr="Invalid Email";
            formIsValid = false;
        }
        else{
            await axios.post(`/emailValidate`, {email: fieldData.email})
            .then(async res=>{
                if(await res.data===true){
                    er.emailEr = "Email already exist.";
                    formIsValid = false;
                }
            })
        }
        if(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/.test(fieldData.password) == false){
           if(fieldData.password.length<8){
            er.passwordEr="Password too short."
            formIsValid = false;
            }

            else if(fieldData.password.length>80){
                er.passwordEr="Password too long."
                formIsValid = false;
            }

            // else{
            //     er.passwordEr="Invalid Password Pattern"
            //     formIsValid = false;
            // }
    
        }
        if(!(fieldData.password===fieldData.confirmpassword)){
            er.confirmpasswordEr="Passwords did not match."
            formIsValid = false;
        }
        if(formIsValid){
            setErrors({});
            setStep(2);
        }
        setErrors(er);

    }

    async function validateform2(){
        formIsValid = true;
        const er = {};
        if(fieldData.firstName.length<1){
            er.firstEr="Invalid first name.";
            formIsValid = false;
        }
        if(fieldData.lastName.length<1){
            er.lastEr = "Invalid last name.";
            formIsValid = false;
        }
        if(fieldData.dob.length<1){
            er.dobEr = "Enter date of birth.";
            formIsValid = false;
        }
        if(fieldData.gender.length<1){
            er.genderEr = "Select a gender.";
            formIsValid = false;
        }

        if(formIsValid){
            axios.post('/register',fieldData).then(response=>{console.log(response.data)});

        }
        setErrors(er);
    }

    const handleChange = (e) => {
        fieldData[e.target.name] = e.target.value;
    }
    
    const handleSubmit1 = (event) =>{
        event.preventDefault();
        validateForm1();
    }
    const handleSubmit2 = (event) =>{
        event.preventDefault();
        validateform2();
    }
        return (

            <div className='d-flex flex-column justify-content-center align-items-center'>     
            {step===1 &&<section className='d-flex flex-column justify-content-center align-items-center'>
                <div className="logo-contL">
                    <img src={logo} alt="Surilo Logo" />
                </div>
                <div className="slogan text-center">
                    <h1>Sign up to discover your favorite artists</h1>
                </div>

                <hr className='hor'/>

                <div className="info m-2">
                    <h4>Kindly fill with valid details</h4>
                </div>

                <form className='cred-form' method="POST">
                        <div className="label-ctn">
                        <label htmlFor="username">Username</label>
                        </div>
                    <div className='entry-Ctn'>   
                        <input className='usrEnt' onChange = {handleChange} type="text" autoComplete='off' name="username" placeholder='testuser456' id="username"/>      
                        <div className="errormsg">{errors["usernameEr"]}</div>
                    </div>
                    <div className="label-ctn">
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className='entry-Ctn'>
                        <input className='usrEnt' type="email" onChange = {handleChange} autoComplete='off'  name="email" placeholder='temp_mail@email.com' id="email" />
                        <div className="errormsg">{errors["emailEr"]}</div>
                    </div>

                    <div className="label-ctn">
                        <label htmlFor="password">Password</label>
                        </div> 
                    <div className='entry-Ctn'>
                        <input className='usrEnt' type="password" onChange = {handleChange} autoComplete='off' name="password" placeholder='********' id="password"/>
                        <div className="errormsg">{errors["passwordEr"]}</div>

                    </div>
                    <div className="label-ctn">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                    </div> 
                    <div className='entry-Ctn'>
                        <input className='usrEnt' type="password" onChange = {handleChange} autoComplete='off' name="confirmpassword" placeholder='********' id="confirmPassword" />
                        <div className="errormsg">{errors["confirmpasswordEr"]}</div>
                    </div>

                    <div className="btn-ctn">
                        <button type="button" onClick={handleSubmit1}><img className='next-btn' src={next} alt="" /></button>
                    </div>

                </form>

        
            </section>}
                           
            {step===2 && <section>  
                <div className="logo-contL">
                    <img src={logo} alt="Surilo Logo" />
                </div>
                <div className="slogan text-center">
                    <h1>Just a bit to go</h1>
                </div>
                <hr />  
                <form method="POST" action="localhost:3000/">
                    <div className="label-ctn">
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className='entry-Ctn'>     
                        <input className='usrEnt' onChange = {handleChange} value={fields.firstName} type="text" autoComplete='off' name="firstName" placeholder='Elon' id="firstName"/> 
                        <div className="errormsg">{errors["firstEr"]}</div>
                    </div>
                    <div className="label-ctn">
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className='entry-Ctn'>   
                        <input className='usrEnt' onChange = {handleChange} value={fields.lastName} type="text" autoComplete='off' name="lastName" placeholder='Musk' id="lastName"/> 
                        <div className="errormsg">{errors["lastEr"]}</div>
                    </div>
                    
                    <div className="label-ctn">
                        <label htmlFor="dob">Date of birth</label>
                        </div>
                    <div className='entry-Ctn'>   
                        <input className='usrEnt' onChange = {handleChange} value={fields.dob} type="date" autoComplete='off' name="dob" id="dob" /> 
                        <div className="errormsg">{errors["dobEr"]}</div>
                    </div>      

                    <div className="label-ctn">
                        <label htmlFor="dob">Gender</label>
                        </div>
                    <div className='entry-Ctn'>   
                        <div className='gender-container' onChange={handleChange}>
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
                        <div className="errormsg">{errors["genderEr"]}</div>
                    </div>    

                    <div className='regBtn-ctn'>
                        <button type='button' className='reg-btn' onClick={handleSubmit2}>Sign up</button>
                        {/* ()=>{axios.post('/login',fieldData);} */}
                        <h6 className='existLabel'>Already have an account? <Link to ='/'>Log in</Link></h6>
                    </div>

                </form>
                
            
                <div className='OTP-ctn hide' id="otpCtn">
                    <Otp fields={fields} gender={gender}></Otp>
                </div>
            </section>}


        
        </div>
    )
}