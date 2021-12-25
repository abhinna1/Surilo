import React from 'react';
import "./InfoReg.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./surilo2.png";
import { useState } from 'react';
    

export default function MultipleInputs(){

    const fieldData = {
        firstName :"",
        lastName :"",
        dob :"",
        }

        const genderData ={
            male: false,
            female: false,
            other:false
        }

    const [fields,setFields] = useState({fieldData});
    const [gender,setGender] = useState({genderData});


    const handleChange = (event) => {
        setFields({...fields, [event.target.name]: event.target.value})
    }

    const handleGenderChange = (event) =>{
        console.log(event.target.name ,":", event.target.checked)
    }
    
    console.log(fields.firstName)
    console.log(fields.lastName)
    console.log(fields.dob)
    


    return (

        <div className='d-flex flex-column justify-content-center align-items-center'>
            
            <div className="logo-cont">
                <img src={logo} alt="Surilo Logo" />
            </div>
            

            <div className="slogan text-center">
                <h1>Just a bit to go</h1>
            </div>

            <hr />

            

            <form>
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
                    <div className='gender-container'>
                        <div className='g-ctn'>
                            <input type="checkbox" className='gen-chk' name="male" id="maleChk" onChange ={e => handleGenderChange(e)} checked={gender.male}/>
                            <label for="male" className='gen-label'> Male</label>
                        </div>

                        <div className='g-ctn'>
                            <input type="checkbox" className='gen-chk' name="female" id="femaleChk"  onChange ={e => handleGenderChange(e)} checked={gender.female}/>
                            <label for="female" className='gen-label'> Female</label>
                        </div>

                        <div className='g-ctn'>
                            <input type="checkbox" className='gen-chk' name="other" id="otherChk"  onChange ={e => handleGenderChange(e)} checked={gender.other}/>
                            <label for="other" className='gen-label'> Other</label>
                        </div>
                    </div>

                </div>    

                <div className='regBtn-ctn'>
                    <button className='reg-btn'>Sign up</button>
                    <h6 className='existLabel'>Already have an account? <a href="">Log in</a></h6>
                </div>
                




            </form>

        
        </div>
    )
}


