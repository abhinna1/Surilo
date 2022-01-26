import React from 'react';
import "./InfoReg.css";
import './multipleInputs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/surilo2.png";
import { useState } from 'react';
import Otp from './Otp.js';
import { Link } from 'react-router-dom';
import next from "../images/next.png";
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 


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

    const [error1, setError1] = useState("");
    const [error2, setError2] = useState("");
    const [error3, setError3] = useState("");

    const [error11, setError11] = useState("");
    const [error22, setError22] = useState("");
    const [error33, setError33] = useState("");



 // Validation for Page 1
 function  validate1(){
    if(fieldData.username === "" && fieldData.username.length() < 3){
        setError1("Invalid Name");
    }

    else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fieldData.email) == false){
        // alert("Wrong email");
        setError2("Invalid Email");
    }
    else if (fieldData.password !== fieldData.confirmPassword || fieldData.password == ""){
        setError3("Password donot match")
    }
    else{
        setStep(2);
    } 
} 

// Validation for Page 2
function  validate2(){
    if(fieldData.firstName === "" && fieldData.firstName.length() < 3){
        setError1("Invalid First Name");
    }

    else if(fieldData.lastName === "" && fieldData.lastName.length() <= 2){
        setError1("Invalid Last Name");
    }

    else if(fieldData.dob === ""){
        setError1("Invalid Birth Date");
    }

    else{
        //setStep(2);
    } 

}





    const handleChange = (e) => {
        fieldData[e.target.name] = e.target.value;
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        if(formIsValid){
            // document.getElementById("otpCtn").classList.remove('hide') //removes the hide class that initially hid the OTP container when the form is valid letting user enter
        }
    }
        return (

            <div className='d-flex flex-column justify-content-center align-items-center'>                    
            {step===2 && <section>  
                <div className="logo-cont">
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
                        <div className="errormsg">{error11}</div>
                    </div>
                    <div className="label-ctn">
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className='entry-Ctn'>   
                        <input className='usrEnt' onChange = {handleChange} value={fields.lastName} type="text" autoComplete='off' name="lastName" placeholder='Musk' id="lastName"/> 
                        <div className="errormsg">{error22}</div>
                    </div>
                    
                    <div className="label-ctn">
                        <label htmlFor="dob">Date of birth</label>
                        </div>
                    <div className='entry-Ctn'>   
                        <input className='usrEnt' onChange = {handleChange} value={fields.dob} type="date" autoComplete='off' name="dob" id="dob" /> 
                        <div className="errormsg">{error33}</div>
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

                    </div>    

                    <div className='regBtn-ctn'>
                        <button type='submit' className='reg-btn' onClick={()=>{axios.post('/login',fieldData); <Route path="/"></Route>}}>Sign up</button>
                        
                        <h6 className='existLabel'>Already have an account? <Link to ='/'>Log in</Link></h6>
                    </div>

                </form>
                
            
                <div className='OTP-ctn hide' id="otpCtn">
                    <Otp fields={fields} gender={gender}></Otp>
                </div>
            </section>}


        {step===1 &&<section className='d-flex flex-column justify-content-center align-items-center'>
                <div className="logo-cont">
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
                        <div className="errormsg">{error1}</div>
                    </div>
                    <div className="label-ctn">
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className='entry-Ctn'>
                        <input className='usrEnt' type="email" onChange = {handleChange} autoComplete='off'  name="email" placeholder='temp_mail@email.com' id="email" />
                        <div className="errormsg">{error2}</div>
                    </div>

                    <div className="label-ctn">
                        <label htmlFor="password">Password</label>
                        </div> 
                    <div className='entry-Ctn'>
                        <input className='usrEnt' type="password" onChange = {handleChange} autoComplete='off' name="password" placeholder='********' id="password"/>
                        
                    </div>
                    <div className="label-ctn">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                    </div> 
                    <div className='entry-Ctn'>
                        <input className='usrEnt' type="password" onChange = {handleChange} autoComplete='off' name="confirmPassword" placeholder='********' id="confirmPassword" />
                        <div className="errormsg">{error3}</div>
                    </div>

                    <div className="btn-ctn">
                        {/* <Link to= '/signUp2' type='submit'><img className='next-btn' src={next} alt="" /></Link>   */}
                        <button type="button" onClick={()=>{validate1() }}><img className='next-btn' src={next} alt="" /></button>
                    </div>

                </form>

        
            </section>}
        </div>
    )
}