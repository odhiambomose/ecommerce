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

    return(
        <div className="signup-flex">
            <div className="bgimage3"></div>
            <div className="text-form">
            <div>
                <h2 className="heading-text">Sign up with us</h2>
        <input type="text" placeholder="fist name"  className="persons"/>
        <input type="text" placeholder="Last Name" className="persons"/>
        </div>
        <div>
<input type="text" placeholder="Email"  className="email-signup"/>
        </div>
        <div>
            <input onChange={(e)=>onpasswordChange(e)} type="text" placeholder="Password" className="password-signup"/>
            
        </div>
        <div>
            <input onChange={(e)=>onconfirmPassword(e)} type="text" placeholder="Confirm Password" className="confirm" />
        
        </div>
{password===confirmPassword?<CheckIcon  style={{color:"green"}}/>:<ClearIcon style={{color:"red"}} />}
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