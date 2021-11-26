import React from "react";
import "./Select.css";
const Select=()=>{
    return(
        <>
        <div className="heading-select">
            <h2>Dresses</h2>
        </div>
        <div className="selection">
<div className="size-part">
    <h2>Filter Product:size</h2>
        <select name="size" className="selection-part">
        <option value="1" selected disabled>Size</option>
            <option value="1">S</option>
            <option value="2">M</option>
            <option value="3">L</option>
            <option value="4">XL</option>
        </select>
        </div>

        <div className="color-part">
<h2>Color</h2>
        <select name="color" className="selection-part">
        <option value="1" selected disabled>Color</option>
            <option value="1">White</option>
            <option value="2">Black</option>
            <option value="3">Green</option>
            <option value="4">Red</option>
        </select>


        </div>

        <div className="price-part">
        <h2>Sort Products:Price</h2>
        <select name="Price" className="selection-part">
        <option value="1" selected disabled>Price</option>
            <option value="1">Highest to Lowest</option>
            <option value="2">Lowest to Highest</option>
            
</select>
        </div>
        </div>
        </>
    )
}
export default Select