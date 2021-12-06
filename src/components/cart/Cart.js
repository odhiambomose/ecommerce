import React from "react";
import "./Cart.css"
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const Cart=()=>{
    
    const[number,setNumber]=useState(0)

    const increase=()=>{
        if(number<5){
        setNumber(prevNum =>prevNum +1)}
    }
    const decrease=()=>{
        if(number>1){
        setNumber(prevNum=>prevNum -1)}
    }
    return(
        <>
   <div className="all-flex">
       <div>
       <div>
       <div>
           <h2 className="cart-heading">Your Cart</h2>
       </div>
       <div className="all-parts">
           <div className="flex">
       <div>
       <div>
           <img src="images/tshirt.jpg"width="200"/>
       </div>
       </div>
       <div>
       <div className="product1">
       
       <div className="part-icon">
           <p>Mens Jake guitar Vintage Crusher</p>
 
         <p className="clear">  <ClearIcon  /></p>1<span className="quantity">Ksh.3,000</span>
           
       </div>
       <div >


</div>
 
       
       </div>
       <div className="icon-part">
       <div className="west-text">
<p className="border"></p>
<RemoveIcon onClick={decrease} />
<p className="count">{number}</p>
<AddIcon onClick={increase}/>
</div>
<div className="remove">
    <DeleteOutlineOutlinedIcon style={{color:"red"}}/>1<span className="warning">Remove</span>
</div>
</div>
</div>
    

</div>
</div>
</div>
<hr />

<div>

       <div className="all-parts">
           <div className="flex">
       <div>
       <div>
           <img src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png"width="200"/>
       </div>
       </div>
       <div>
       <div className="product1">
       
       <div className="part-icon">
           <p>Mens Jake guitar Vintage Crusher</p>
 
         <p className="clear">  <ClearIcon  /></p><span className="quantity">Ksh.3,000</span>
           
       </div>
       <div >


</div>
 
       
       </div>
       <div className="icon-part">
       <div className="west-text">
<p className="border"></p>
<RemoveIcon onClick={decrease}/>
<p className="count">{number}</p>
<AddIcon onClick={increase}/>
</div>
<div className="remove">
    <DeleteOutlineOutlinedIcon style={{color:"red"}}/><span className="warning">Remove</span>
</div>
</div>
<div className="access">
<button className="btn-shop">CONTINUE SHOPPING</button>
</div>
</div>
    

</div>
</div>
</div>
</div>


<div className="fill-part">
<h3 className="order">Your Order</h3>
<p className="para-span">Subtotal<span className="prize-span" >Ksh 4,000</span></p>
<p className="para-span">Discount<span className="disc1">-</span></p>
<p className="para-span">Shipping<span className="shipping">-</span></p>
<p className="para-span">Totals<span className="prize-span">Ksh 4,000</span></p>
<button className="checkout">CHECKOUT</button>


</div>

</div>

</>



       





   
    )


}
export default Cart