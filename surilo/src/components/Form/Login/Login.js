import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/surilo2.png";
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import { useState } from 'react';
import { useHistory } from "react-router-dom";


export default function Login(){

    const [email,setemail] = useState("");
    const [password,setpassword] =useState("");
    const [errormsg,Seterrormsg] = useState("")

    let [SuccessDiv, setSuccessDiv] = useState(false);


    const history = useHistory();
    const postData = () => {
        Axios.post("/login",{
            email : email,
            password : password,
        }).then((response) =>{
            console.log(response.data)
            if (response.data.found==true){
                localStorage.setItem('user', JSON.stringify(response.data.data))
                setSuccessDiv(true)
            }
            else {
                Seterrormsg("Credentials Error")
                localStorage.clear();
            }
        });

    }

    

    return (

        <div className='login-container d-flex flex-column justify-content-center align-items-center'>
            
            <div className='semi-container d-flex flex-column justify-content-center align-items-center'>

            
            <div class="logo-contL">
                <img src={logo} alt="Surilo Logo" />
            </div>
            
            <form className='login-form'>    
                <div className="label-ctn">
                    <label htmlFor="email">Email</label>
                </div>

                <div className='entry-Ctn'>
                    <input className='usrEnt' onChange={(e) =>{setemail(e.target.value)}} type="email" autoComplete='off' placeholder='surilo@email.com' name="email" id="email" />
                    <div className="errormsg
                    ">{errormsg}</div>
                </div>
                <div className="errormsg left-margin"></div>
                <div className="label-ctn">
                    <label htmlFor="password">Password</label>
                    </div> 
                <div className='entry-Ctn'>
                    <input className='usrEnt' onChange={(e) =>{setpassword(e.target.value)}} type="password" autoComplete='off' name="password" placeholder='********' id="password"/>
                    <div className="errormsg">{errormsg}</div>
                    
                </div>
                
                <div className='regBtn-ctn'>
                    <button className='reg-btn' type="button" onClick={postData}>Login</button>  

                    <h4 className='or'> or </h4>

                    <h6 className='existLabel'>Don't have an account? <Link to='/register'>Sign Up</Link></h6>
                </div>

            </form>

            </div>     

            {SuccessDiv?<div className='loginSuccess d-flex justify-content-center align-items-center'>
                <div className='loginSuccessCtn p-2'>
                    <h2>Login Success</h2>
                    <Link to="/home">Go to Home</Link>

                </div>

                </div> :null}
             
        </div>
    )   
}


