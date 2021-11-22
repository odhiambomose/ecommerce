import React from "react";
import { categories } from "../../data"

import CategoryItem from "../CategoryItem/CategoryItem";
import "./Category.css";


const Categories = () => {
    return (
<div className="category-container">
    {
        categories.map(item => {
            return (

                <CategoryItem item={item}/>
               
            )
        })
    }
         </div>

    )
}
export default Categories