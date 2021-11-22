import React from "react";
import "./CategoryItem.css";

const Categories=({item})=>{
    return(
        <div className="category-product">

<div className="category-image">
    <img src={item.img} />
</div>
<div className="category-info">
    <h1>{item.title}</h1>
    

<div>
<button>Shop Know</button>
</div>
</div>

        </div>
    )
}
export default Categories