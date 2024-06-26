import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setshowlogin}) => {

    const [currstate, setcurrstate] = useState("Login")

    return (
        <div className='login-popup'>
            <form className="login-popup-container">

                <div className="login-popup-title">

                    <h2>
                        {currstate}

                    </h2>

                    <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt="" />


                </div>

                <div className="login-popup-inputs">
                    {currstate==="Login" ? <></>: <input type="text" placeholder='Your name'  required/> }
                    <input type="email" placeholder='Your email' required />
                    <input type="passwod" placeholder='Password' required />
                </div>
                <button> {currstate==="sign up"? "Create account" : "Login"} </button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
                {currstate==="Login"
                ? <p>
                Create a new account? <span onClick={()=>setcurrstate("sign up")}>Click here</span> </p>
                : <p>Already have an account? <span onClick={()=>setcurrstate(" Login")}>Login here</span></p>
                
                }
               
               
            </form>

        </div>
    )
}

export default LoginPopup
