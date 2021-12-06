import React from "react";
import { useState } from "react";
import "./Signup.js"
import "./Signup.css"
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';






const Signup=()=>{
    const[password,setPassword]=useState("")
    const[confirmPassword,setConfirmPassword]=useState("")

    function onpasswordChange(e){
      const passwordValue=e.target.value;
      setPassword(passwordValue)

    }

    function onconfirmPassword(e){
        const confirmPasswordValue=e.target.value;
        setConfirmPassword(confirmPasswordValue)
    }

    const renderIcons = ()=>{
        if(confirmPassword !== ""){
        
           
           return     password===confirmPassword?<CheckIcon  style={{color:"green"}}/>:<ClearIcon style={{color:"red"}} />
            
            
        }
    }

    return(
        <div className="signup-flex">
            <div className="bgimage3"></div>
            <div className="text-form">
            <div className="column">
                <div>
                <lable>First Name</lable>
        <input type="text" placeholder=""  className="persons"/>
        </div>
        <div>
        <lable>Last Name</lable>
        <input type="text" placeholder="" className="persons"/>
        </div>
        </div>

        <lable>Email</lable>
        <div>
<input type="text" placeholder=""  className="email-signup"/>
        </div>
        <lable>Password</lable>
        <div>
            <input onChange={(e)=>onpasswordChange(e)} type="password" placeholder="" className="password-signup"/>
            
        </div>
        <lable>Confirm Password</lable>
        <div>
            <input onChange={(e)=>onconfirmPassword(e)} type="password" placeholder="" className="confirm" />
        
        </div>
{renderIcons()}
        <div className="check-signup">
            <input type="checkbox" placeholder="" />
            <p>I accept the Terms of Use & Privacy policy</p>
        </div>
        <div>
            <button className="signup-btn">Sign Up</button>
        </div>
        </div>
        </div>
    )
}
export default Signup