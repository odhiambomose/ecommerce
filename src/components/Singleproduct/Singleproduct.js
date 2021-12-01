import React, { useState } from "react";
import "./Singleproduct.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const Singleproduct=()=>{
    const[number,setNumber]=useState(0);

    const[color,setColor]=useState("Maroon")
    const[active,setactive]=useState(0)
    
    const increase=()=>{
        if(number<5){
        setNumber(prevNum => prevNum +1);}
    };
    const decrease=()=>{
        if(number>1){
        setNumber(prevNum => prevNum -1);}
    }
    function handleColorOnHover(color){
        setColor(color);

    }
    function activeChange(active){
        setactive(active)
    }

    
    return(
    
        <div className="flex-items">

            <div className="flex-inner">
            <img src="images/tshirt.png" width="500" />
            </div>
<div className="flex-inner">
            <div className="description-part">
<h2>T-shirt</h2>
</div>
<p className="description">This is one of the leading brands of clothing in africa order and get it at cheaper prize.We will make sure you get at your door step.</p>

<p className="prize">Ksh.3,000</p>

            
            
            <div>
            <select name="size" className="choose-part">
        <option value="1" selected disabled>Size</option>
            <option value="1">S</option>
            <option value="2">M</option>
            <option value="3">L</option>
            <option value="4">XL</option>
        </select>

            </div>
            <div className="paragraph-select" >
                <div className="paragraph-select">
<p>Selected Color:<span style={{color:color}}>{color}</span></p>
</div>
<div className="colors">
    <h2>Color</h2>
<div className="color-item maroon-outer">
    <div className="inner-color maroon" onMouseOver={()=>handleColorOnHover("Maroon")} onClick={()=>setColor("Maroon")} onClick={()=>activeChange("maroon")}></div>
</div>
<div className="color-item yellow-outer" >
<div className="inner-color yellow" onMouseOver={()=>handleColorOnHover("Yellow")} onMouseOut={()=>setColor("maroon")}  onClick={()=>activeChange("yellow")} ></div>
</div>
<div className="color-item green-outer">
<div className="inner-color green" onMouseOver={()=>handleColorOnHover("green")} onMouseOut={()=>setColor("maroon")}  onClick={()=>activeChange("maroon")}></div>
</div>


</div>

            </div>
            <div className="paragraph-count">
<RemoveIcon onClick={decrease} />
<p className="border-paragraph">{number  }</p>
<AddIcon onClick={increase} />
<p className="cart">Add to Cart</p>
<div className="icon-love">
<FavoriteBorderIcon />
</div>
<p className="wish">Add to WishList</p>

</div>
            </div>
        </div>
        
    )
}
export default Singleproduct