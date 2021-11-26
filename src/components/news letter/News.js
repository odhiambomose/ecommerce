import React from "react";
import "./News.css"
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


const Newsletter = () => {
    return (
<div className="input-news">
<div className="heading-paragraph">
    <h2>Newsletter</h2>
    <p>Sign up for our Newsletter to be notified on New promotions and sales</p>
</div>
<div className="newsletter">
<div className="input-content" >
    <input type="text" placeholder="Enter Email adress" className="input"/>
    
</div>
<button className="btn btn-newsletter"><SendOutlinedIcon /></button>
</div>

</div>

     ) }
    
        

    

export default Newsletter