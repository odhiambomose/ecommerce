import React from "react"
import "./Login.css"
import { useState } from "react"
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'




const Login=()=>{
    const[type,setType]=useState("")
    const[icon,setIcon]=useState(eyeOff)


    const handleToggle=()=>{
        if(type==="password"){
            setIcon(eye);
            setType("text");
        }else{
            setIcon(eyeOff);
            setType("password");

        }
    }

return(
    <>
    
    <div className="background-part">
        
    <div className="form-part">
        <div>
        <form>
        <div>
            <div className="heading-form1">
            <h2>magoso enterprises</h2>
            </div>
            <div className="heading-form2">
            <h3>Login</h3>
            </div>
        </div>
        <div className="email-input">
           
           
         <input type="text" placeholder=""  className="part-email"/>
         <label for="email" className="color-leble">E-mail</label>

        </div>
        <div className="password-input">
        <input type={type} placeholder="" className="part-password" />
            <lebel for="password" className="password">password</lebel>
            <span onClick={handleToggle} className=
            'icon-visibility '><Icon icon={icon} size={25} /></span>




        </div>
        <div>
            <button className="log-part">Log in</button>
        </div>
        <div className="password-check">
            <div><input type="checkbox" />Remember me</div>
            <div><p className="password-forgot">Forgot your password?</p></div>

        </div>
        <div className="account-part">
            <div><p>New to magoso Enterprises</p></div>
            <div><button className="creat">Creat Account</button></div>
            
        </div>
        </form>
        </div>
        
        

    
        
         <div className="login-text">
    <div>
        <p>welcome to</p>
        <h2>Magoso Enterprise</h2>
        <p>the home of reliable shopping</p>
    </div>
    </div> 
    
    </div>
    
    </div>
    
    </>
)


}
export default Login