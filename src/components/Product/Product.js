


import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./Product.css";


const Product=({gallery})=>{
    return(
        <div className="icon-container">

<div className="image-container">
    <img src={gallery.img} />
    
    <div className="circle"></div>
</div>






        
        <div className="icons-content">
<div className="icon-circle"><ShoppingCartIcon /></div>
<div className="icon-circle"><FavoriteBorderOutlinedIcon /></div>
<div className="icon-circle"><SearchOutlinedIcon /></div>


</div>
        </div>
    )
}
export default Product;