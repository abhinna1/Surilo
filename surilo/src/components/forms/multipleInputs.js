import React from 'react';
import './multipleInputs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./surilo2.png";
import next from "./next.png";
import { useForm }  from "react-hook-form";

export default function MultipleInputs(){

    const {register, handleSubmit, formState:{ errors },} = useForm();


    const onSubmit = (data) => {
        console.log(data.password)
        console.log(data.confirmPassword)

        if (data.confirmPassword.match(data.password)){
            document.getElementById("err").innerHTML="Password Matched"
        }else{
            document.getElementById("err").innerHTML="Password not match"
        }
    }

  

    return (

        <div className='d-flex flex-column justify-content-center align-items-center'>
            
            <div class="logo-cont">
                <img src={logo} alt="Surilo Logo" />
            </div>
            

            <div class="slogan">
                <h1>Sign up to discover your favorite artists</h1>
            </div>

            <hr className='hor'/>

            <div class="info">
                <h4>Kindly fill with valid details</h4>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='entry-Ctn'>   
                    <label htmlFor="username">Username</label>
                    <input className='usrEnt' type="text" autoComplete='off' name="username" placeholder='testuser456' id="username" {...register("username", {required:true})}  /> 
                    {errors.username && <p className='error-msg'>Please enter your username</p>}
                </div>

                <div className='entry-Ctn'>
                    <label htmlFor="email">Email</label>
                    <input className='usrEnt' type="email" autoComplete='off'  name="email" placeholder='temp_mail@email.com' id="email" 
                    {...register("email",
                     {
                         required:true, 
                         pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                         
                         })} />
                    {errors.email && <p className='error-msg'>Please check your email address</p>}
                </div>

                <div className='entry-Ctn'>
                    <label htmlFor="password">Password</label>
                    <input className='usrEnt' type="password" autoComplete='off' name="password" placeholder='********' id="password" {...register("password", {required:true}, {minLength:8})}  />
                    {errors.password && <p className='error-msg'>Please enter the Password</p>}
                </div>

                <div className='entry-Ctn'>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input className='usrEnt' type="password" autoComplete='off' name="confirmPassword" placeholder='********' id="confirmPassword"  {...register("confirmPassword",  {required:true}, {minLength:8})}  />
                    {errors.confirmPassword && <p className='error-msg'>Please re-enter the password</p>}
                    <p className='error-msg' id="err"></p>
                </div>

                <div className="btn-ctn">
                    <button type='submit'> 
                        <img className='next-btn' src={next} alt="" />
                    </button>
                </div>


            </form>

        
        </div>
    )
}


