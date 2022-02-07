import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/surilo2.png";
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import { useState } from 'react';


export default function Login(){


    const [email,setemail] = useState("");
    const [password,setpassword] =useState("");


    

    const postData = () => {
        Axios.post("/login",{
            email : email,
            password : password,
        }).then((response) =>{
            if (response.data.message){
                console.log(response);
            }
            else {
                console.log(response.data);
            }
        });

    }

    


    // const postData=()=>{
    //     // Axios.get("/User")
    //     // .then((res)=>{
    //     //   console.log(res["data"]);
    //     // })
    //     let email = document.getElementById("email").value;
    //     let pass = document.getElementById("password").value;
    //     Axios.post("/login",{email:email, password:pass})
    //       .then(()=>{console.log("posted")})
    //   }
    //   ;




 
      // Google Login

    //   const [loginData, setLoginData] = useState(
    //     localStorage.getItem('loginData')
    //       ? JSON.parse(localStorage.getItem('loginData'))
    //       : null
    //   );
    
      const handleFailure = (result) => {
        alert(result);
      };
    
      const handleLogin = async (googleData) => {

        console.log(googleData);
      }

    //    // const res = await fetch('/api/google-login', {
    //       method: 'POST',
    //       body: JSON.stringify({
    //         token: googleData.tokenId,
    //       }),
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     });

    //   const data = await res.json();
    //   setLoginData(data);
    //   localStorage.setItem('loginData', JSON.stringify(data));
    // };
       

    return (

        <div className='login-container d-flex flex-column justify-content-center align-items-center'>
            
            <div className='semi-container d-flex flex-column justify-content-center align-items-center'>

            
            <div class="logo-cont">
                <img src={logo} alt="Surilo Logo" />
            </div>
            
            <form className='login-form'>    
                <div className="label-ctn">
                    <label htmlFor="email">Email</label>
                </div>

                <div className='entry-Ctn'>
                    <input className='usrEnt' onChange={(e) =>{setemail(e.target.value)}} type="email" autoComplete='off' placeholder='surilo@email.com' name="email" id="email" />
                </div>
                <div className="label-ctn">
                    <label htmlFor="password">Password</label>
                    </div> 
                <div className='entry-Ctn'>
                    <input className='usrEnt' onChange={(e) =>{setpassword(e.target.value)}} type="password" autoComplete='off' name="password" placeholder='********' id="password"/>
                    
                </div>
                
                <div className='regBtn-ctn'>
                    <button className='reg-btn' type="button" onClick={postData}>Login</button>  

                    <h4 className='or'> or </h4>

                    <div>
                        <GoogleLogin
                    clientId="570589698753-g28a852qp3gr9cgrli2g7p4cotj7p89n.apps.googleusercontent.com"
                    buttonText ="Login with Google"
                    onSuccess ={handleLogin}
                    onFailure={handleFailure}
                   cookiePolicy={'single_host_origin'}
                    >
                    </GoogleLogin>
    
                    </div>

                    <h6 className='existLabel'>Don't have an account? <Link to='/register'>Sign Up</Link></h6>
                </div>

            </form>

            </div>        
        </div>
    )   
}


